"use strict";
const shadowBox = document.getElementById("shadow");
const btns = document.querySelectorAll("button");
console.log(btns);

function LogIn() {
    if (shadowBox.classList.contains("toggle-left")) {
        shadowBox.classList.remove("toggle-left");
        shadowBox.classList.add("toggle-right")
    } else {
        shadowBox.classList.add("toggle-right");
    }

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("btns")) {
            btns[i].classList.remove("btns");
            btns[i].classList.add("bt-right");
            btns[i].classList.replace("bt-left", "btns")
        } else {
            btns[i].classList.replace("bt-left", "btns");
        }
    }
};

function SignUp() {
    if (shadowBox.classList.contains("toggle-right")) {
        shadowBox.classList.remove("toggle-right");
        shadowBox.classList.add("toggle-left")
    } else {
        shadowBox.classList.add("toggle-left");
    }

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("btns")) {
            btns[i].classList.remove("btns");
            btns[i].classList.add("bt-left");
            btns[i].classList.replace("bt-right", "btns")
        } else {
            btns[i].classList.replace("bt-right", "btns");
        }
    }
}