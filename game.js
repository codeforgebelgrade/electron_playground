import { locations } from './locations.js';

let currentLocation = 'forest';

function updateLocation(newLocation) {
    currentLocation = newLocation;
    document.getElementById('current-location').textContent = locations[currentLocation].name;
    document.getElementById('location-description').textContent = locations[currentLocation].description;
    
    // Handle location picture
    const locationPicture = document.getElementById('location-picture');
    if (locations[currentLocation].picture) {
        locationPicture.style.display = 'block';
        locationPicture.src = locations[currentLocation].picture;
    } else {
        locationPicture.style.display = 'none';
    }
    
    // Add monster description if present
    // Handle monster information separately
    const monsterDescription = document.getElementById('monster-description');
    if (locations[currentLocation].monster) {
        document.getElementById('monster-section').style.display = 'block';
        monsterDescription.textContent = locations[currentLocation].monster.description;
    } else {
        document.getElementById('monster-section').style.display = 'none';
    }
    
    // get available moves
    const movesDiv = document.getElementById('available-moves');
    movesDiv.innerHTML = '';
    
    // display connections betweeen locations and buttons
    locations[currentLocation].connections.forEach(connection => {
        const button = document.createElement('button');
        button.textContent = `Go to ${locations[connection].name}`;
        button.onclick = () => updateLocation(connection);
        movesDiv.appendChild(button);
    });
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    updateLocation(currentLocation);
});