export const mostHolyFish = (fishes) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (let fish of fishes) {
        if (fish.size % 3 === 0){
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = (fishes) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (let fish of fishes){
        if (fish.size % 5 === 0 && fish.size % 3 !== 0){
            soldiers.push(fish);
        }
    }
    return soldiers
}




export const nonHolyFish = (fishes) => {
    // Any fish not a multiple of 3 or 5
    let regularFish = [];
    for (let fish of fishes) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}