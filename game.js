import { locations } from './locations.js';

let currentLocation = 'forest';

function updateLocation(newLocation) {
    currentLocation = newLocation;
    document.getElementById('current-location').textContent = locations[currentLocation].name;
    document.getElementById('location-description').textContent = locations[currentLocation].description;
    
    // Add monster description if present
    const locationDescription = document.getElementById('location-description');
    locationDescription.textContent = locations[currentLocation].description;
    if (locations[currentLocation].monster) {
        locationDescription.textContent += ' ' + locations[currentLocation].monster.description;
    }
    
    const movesDiv = document.getElementById('available-moves');
    movesDiv.innerHTML = '';
    
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