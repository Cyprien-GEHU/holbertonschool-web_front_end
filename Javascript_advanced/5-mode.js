// changing dom with 2 function

function changeMode(size, weight, transform, background, color) {
    return function()
    {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const text = document.createElement("p");
    text.innerHTML = "Welcome Holberton!";
    document.body.appendChild(text);

    const spButton = document.createElement("button")
    spButton.innerHTML = "Spooky";
    spButton.onclick = function () {spooky()};
    document.body.appendChild(spButton);

    const dmButton = document.createElement("button")
    dmButton.innerHTML = "Dark Mode";
    dmButton.onclick = function(){darkMode()};
    document.body.appendChild(dmButton);

    const smButton = document.createElement("button")
    smButton.innerHTML = "Scream Mode";
    smButton.onclick = function(){screamMode()};
    document.body.appendChild(smButton);
}

main();