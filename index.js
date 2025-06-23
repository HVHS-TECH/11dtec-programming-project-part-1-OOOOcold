let userName;
let userChoice;
let userSeats;
let carArray = ["Walk", "Mazda MX-5 Miata", " McLaren F1", "BMW 4 Series Coupe", "Toyota Corolla", "Tesla Model X" ];
let choice;
let userDays;
let answer = 0;
var ten = 10;

function start() {
    userName = prompt("I'm Rob.\nWhats your name?");
    alert("Hello " + userName + " welcome to Rob's car rentals");
    choice = prompt("How many seats would you the car to have?");
    while (choice < 0 || choice > 8) {
        choice = prompt("We have no cars with " + choice + " seats.\nWe have ones with 1-8 seats");
    }
    userSeats = choice;
    alert("You want " + choice + " seats in your car.\nWe have a " + carArray[choice] + " for you.");
    userDays = prompt("How many days do you want to rent " + carArray[choice] + " for?");
    alert("You want to rent the car for " + userDays + " days.");
    answer = Number(userSeats) * Number(userDays) * ten;
    alert("This " + carArray[choice] + " will cost you $" + answer + ".");
    alert("You want a " + carArray[choice] + " for " + userDays + " days.\nThis will cost you $" + answer + ".");
}