const form = document.querySelector(".js-form");
const input = document.querySelector('input');
const gretting = document.querySelector('.js-gretting');

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGretting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    if(userName === null) {

    } else {
        paintGretting(userName);
    }
}

function init() {
    loadName();
}

init();