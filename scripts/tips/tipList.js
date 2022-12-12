let tips = ["Always water, never milk", "Do not drink", "Avoid eye contact at all cost", "An incredibly complicated one, which goes on and on and on and on and on and on", "First water, then fish. Never the other way around."]


export const getTips = () => {
    let htmlText = "";
    for (let tip of tips){
        htmlText += `<li class='protocol'>${tip}</li>`;
    }
    return htmlText
}