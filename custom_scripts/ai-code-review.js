// scripts/ai-pr-review.js
const fs = require('fs');
const OpenAI = require('openai');

const diff = fs.readFileSync('pr.diff', 'utf8');

if (!diff.trim()) {
  console.log('No diff to review.');
  process.exit(0);
}

const MAX_CHARS = 12000;
const trimmedDiff = diff.slice(0, MAX_CHARS);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `
You are a senior software engineer performing a pull request review.

Review the following Git diff.
Focus on:
- correctness
- potential bugs
- security issues
- readability and maintainability

Be concise and actionable.

--- DIFF START ---
${trimmedDiff}
--- DIFF END ---
`;

(async () => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const reviewContent = response.choices[0].message.content;
    
    console.log("\n=== AI CODE REVIEW ===\n");
    console.log(reviewContent);
    
    // Save to file for GitHub Actions to post as comment
    fs.writeFileSync('review-output.txt', reviewContent, 'utf8');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
