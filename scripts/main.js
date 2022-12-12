import { FishList } from './fish/fishList.js'
import { getTips } from './tips/tipList.js'
import { getLocations } from './locations/locations.js'

// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#main");
parentHTMLElement.innerHTML = FishList();

const tipListHTMLElement = document.querySelector("#protocols");
tipListHTMLElement.innerHTML = getTips();

const locationsHTMLElement = document.querySelector('#locations')
locationsHTMLElement.innerHTML = getLocations();


/* Concept check: 
    1. The data type of the database variable is object. 
    2. The data type of "fish" is array
    3. The data type of "name" is string
    4. The data type of "size" is number
    5. The fish array will contain objects, each representing a fish
*/

