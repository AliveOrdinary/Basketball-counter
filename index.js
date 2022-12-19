


let value_home = document.getElementById("home-counter");
let value_guest = document.getElementById("guest-counter");

let homePLusOne = document.getElementById("home-plus-one");
let homePLusTwo = document.getElementById("home-plus-two");
let homePLusThree = document.getElementById("home-plus-three");

let guestPLusOne = document.getElementById("guest-plus-one");
let guestPLusTwo = document.getElementById("guest-plus-two");
let guestPLusThree = document.getElementById("guest-plus-three");

let homeReset = document.getElementById("home-reset")
let guestReset = document.getElementById("guest-reset")


homePLusOne.addEventListener("click", function() {
    value_home.textContent++;
});

homePLusTwo.addEventListener("click", function() {
    value_home.textContent = Number(value_home.textContent) + 2;
});

homePLusThree.addEventListener("click", function() {
    value_home.textContent = Number(value_home.textContent) + 3;
});

homeReset.addEventListener("click", function() {
    value_home.textContent = 0;
});



guestPLusOne.addEventListener("click", function() {
    value_guest.textContent++;
});

guestPLusTwo.addEventListener("click", function() {
    value_guest.textContent = Number(value_guest.textContent) + 2;
});

guestPLusThree.addEventListener("click", function() {
    value_guest.textContent = Number(value_guest.textContent) + 3;
});

guestReset.addEventListener("click", function() {
    value_guest.textContent = 0;
});

