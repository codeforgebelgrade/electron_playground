export const locations = {
    forest: {
        name: 'Forest',
        connections: ['mountain', 'swamp'],
        description: 'You stand in an ancient forest. Towering trees stretch endlessly into the sky, their branches creating a dense canopy above. Shafts of sunlight pierce through the leaves, illuminating patches of moss-covered ground. The air is thick with the scent of pine and earth.',
        monster: {
            name: 'Wolf',
            description: 'A fierce wolf prowls between the trees, its yellow eyes fixed on you.'
        },
        picture: `./assets/images/forest.jpg`
    },
    mountain: {
        name: 'Mountain',
        connections: ['forest', 'underground'],
        description: 'The rocky mountain path winds before you. Sharp cliffs rise on one side while a steep drop falls away on the other. The thin air makes breathing harder here, but the view of the surrounding lands is breathtaking. Snow caps the highest peaks in the distance.',
        monster: {
            name: 'Dragon',
            description: 'A massive dragon circles the peak, its scales glinting in the sunlight.'
        },
        picture: `./assets/images/mountain.jpg`
    },
    swamp: {
        name: 'Swamp',
        connections: ['forest', 'underground'],
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
    }
};
