export const locations = {
    forest: {
        name: 'Forest',
        connections: ['mountain', 'swamp', 'river'],
        description: 'You stand in an ancient forest. Towering trees stretch endlessly into the sky, their branches creating a dense canopy above. Shafts of sunlight pierce through the leaves, illuminating patches of moss-covered ground. The air is thick with the scent of pine and earth.',
        monster: {
            name: 'Wolf',
            description: 'A fierce wolf prowls between the trees, its yellow eyes fixed on you.'
        },
        picture: `./assets/images/forest.jpg`
    },
    mountain: {
        name: 'Mountain',
        connections: ['forest', 'underground', 'ancientMonolith'],
        description: 'The rocky mountain path winds before you. Sharp cliffs rise on one side while a steep drop falls away on the other. The thin air makes breathing harder here, but the view of the surrounding lands is breathtaking. Snow caps the highest peaks in the distance.',
        monster: {
            name: 'Dragon',
            description: 'A massive dragon circles the peak, its scales glinting in the sunlight.'
        },
        picture: `./assets/images/mountain.jpg`
    },
    swamp: {
        name: 'Swamp',
        connections: ['forest', 'underground', 'river'],
        description: 'Murky waters stretch as far as the eye can see. Strange bubbles occasionally break the surface of the stagnant pools. Twisted trees grow at odd angles from the boggy ground, their roots forming treacherous tangles beneath the water\'s surface.',
        monster: null,
        picture: `./assets/images/swamp.jpg`
    },
    underground: {
        name: 'Underground',
        connections: ['mountain', 'swamp'],
        description: 'The cave system extends into darkness. The air is cool and damp, with the sound of water dripping echoing from unseen chambers. Phosphorescent fungi provide an eerie, blue-green glow along the stone walls.',
        monster: null,
        picture: null
    },
    river: {
        name: 'River',
        connections: ['swamp', 'forest', "mountain"],
        description: 'A wide, crystal-clear river flows swiftly through the landscape. Smooth rocks line the riverbed, visible through the pristine waters. The gentle sound of rushing water creates a peaceful atmosphere, while colorful fish dart beneath the surface. Lush vegetation grows along the banks, swaying in the cool breeze.',
        monster: null,
        picture: null
    },
    ancientMonolith: {
        name: 'Ancient Monolith',
        connections: ['mountain'],
        description: 'A towering stone monolith stands alone on a windswept plateau. Its surface is covered in mysterious runes worn smooth by centuries of weather. The air here feels heavy with history and secrets.',
        monster: null,
        picture: null
    }
};
