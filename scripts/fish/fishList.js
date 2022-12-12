// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";
// import { mostHolyFish, soldierFish, nonHolyFish } from "./holyFish.js";
import { mostHolyFish } from "./holyFish.js";
import { soldierFish } from "./holyFish.js";
import { nonHolyFish } from "./holyFish.js";

let fishBuilder = (fish) => {
    let outStr = ""
    outStr += `<section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">Size: ${fish.size} in.</div>
            <div class="fish__waterType">${fish.waterType}</div>
            <div class="fish__food">Diet: ${fish.food}</div>
        </section>`;

    return outStr;
}

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const fishes = getFish();
  let holyFishes = mostHolyFish(fishes);
  let soldierFishes = soldierFish(fishes);
  let nonHolyFishes = nonHolyFish(fishes);
  let allFishes = holyFishes.concat(soldierFishes, nonHolyFishes)

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishList">';

  // Create HTNL representations of each fish here
  for (const fish of allFishes) {
    // Why is there a backtick used for this string?
    htmlString += fishBuilder(fish);
  }
  htmlString += `</article>`;

  return htmlString;
};