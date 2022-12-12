let locations = ["The Nile River", "The Amazon River", "The Congo River", "The local pond"];

export const getLocations = () => {
    let html = "";
    for (let location of locations){
        html += `<li class='location'>${location}</li>`
    }
    return html
}