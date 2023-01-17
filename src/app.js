const baseElem = document.querySelector("#base");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");


calcButton.addEventListener('click', () => {
    var base = Number(baseElem.value);
    var height = Number(heightElem.value);
    var area = calcTriangleArae(base, height);
    console.log("Terület: " + area);
    areaElem.value = area;
});

function calcTriangleArae(base, height) {
    return base * height / 2;
}
