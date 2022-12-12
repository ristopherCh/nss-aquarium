let fishSpecies = ["Catfish", "Swordtail", "Betta Fish", "Zebra Danio", "Goldfish", "Red Cherry Shrimp", "Killifish", "Rainbowfish", "Angelfish", "Clown Loach"]

let fishColors = ["Royal Blue", "Yellow", "Lavender", "Cherry", "Baby Blue", "Bright Green", "Dark Orange", "Mauve", "Pink", "Boring Grey"]

let fishSizes = [1,2,3,4,5,6,7,8]

let fishWaterTypes = ["Fresh Water", "Salt Water"]

let fishNames = ["Trevor", "Randy", "Patricia", "Nancy", "Luke", "Tim", "Vanessa", "Walter"]

let fishImages = ["images/1_catfish.webp", "images/2_swordtail.jfif", "images/3_betta.jfif", "images/4_zebra.jfif", "images/5_goldfish.jfif", "images/6_shrimp.jfif", "images/7_killifish.jfif", "images/8_rainbow.jfif", "images/9_angelfish.jfif", "images/10_clown.jfif"]



const database = {
    fish: [
        {
            name: "Bart",
            image: "images/0_guppy.jfif",
            food: "Crustaceans",
            color: "Red",
            species: "Guppy",
            waterType: "Fresh Water",
            size: 3
        }
    ]
}


for (let i=0; i<8; i++){
    let newFish = {};
    newFish.name = fishNames[i]
    newFish.color = fishColors[Math.floor(Math.random() * fishColors.length)]
    let speciesIndex = Math.floor(Math.random() * fishSpecies.length);
    newFish.species = fishSpecies[speciesIndex]
    newFish.image = fishImages[speciesIndex]
    newFish.food = `${newFish.species} food`
    newFish.waterType = fishWaterTypes[Math.floor(Math.random() * fishWaterTypes.length)]
    newFish.size = fishSizes[Math.floor(Math.random() * fishSizes.length)]
    database.fish.push(newFish)
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}