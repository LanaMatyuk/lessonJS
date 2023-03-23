
function showMessage() {
    console.log("Я учу JavaScript!");
}
showMessage();


const imageElement = document.getElementById('imageElement');
console.log(imageElement);

let = arrOne = [
    "images/bengalskaya-koshka.jpg",
    "images/koshka_porody_burma.jpg",
    "images/somali.jpg",
    "images/tajskaya-koshka.jpg",
];
console.log(arrOne);

let index = 0;

function changeImageNext() {
    console.log("changeImageNext start index:", index);
    if (index < arrOne.length - 1) {
        index = ++index;
    }
    console.log("changeImageNext end index:", index);
    imageElement.src = arrOne[index];
}
changeImageNext();


function changeImageBack() {
    console.log("changeImageNext start index:", index);
    if (index !== 0) {
        index = --index;
    }
    console.log("changeImageNext end index:", index);
    imageElement.src = arrOne[index];
}
changeImageBack();

