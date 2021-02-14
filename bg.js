const body = document.querySelector("body");

const IMG_NUMBBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `backgrounds/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBBER) + 1;
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();