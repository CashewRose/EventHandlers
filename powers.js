/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const button = document.querySelectorAll("button");
for (i = 0; i < 3; i++) {
    button[i].classList = "disabled";
}

const handlerFunction = (id) => {
    document.querySelector(id).classList.toggle("disabled");
    document.querySelector(id).classList.toggle("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", function () {
    handlerFunction("#activate-flight")
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
document.querySelector("#activate-mindreading").addEventListener("click", function () {
    handlerFunction("#activate-mindreading")
})
document.querySelector("#activate-xray").addEventListener("click", function () {
    handlerFunction("#activate-xray")
})

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click", function () {
    for (i = 0; i < 3; i++) {
        button[i].classList = "enabled";
    }
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    for (i = 0; i < 3; i++) {
        button[i].classList = "disabled";
    }
})