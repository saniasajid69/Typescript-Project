#! /usr/bin/env node
import inquirer from "inquirer";
//Generate a random number using math.random
//User input for guessing number
//Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
let tries = 5;
let won = false;
while (tries > 0) {
    tries--;
    const answers = await inquirer.prompt([
        {
            name: "numberInput",
            type: "number",
            message: "Please guess a number (1-10): ",
        },
    ]);
    if (answers.numberInput === randomNumber) {
        won = true;
        console.log("Congratulations! You guessed the right number.");
        break;
    }
    else if (answers.numberInput < randomNumber) {
        console.log("Your guess is too low.");
    }
    else if (answers.numberInput > randomNumber) {
        console.log("Your guess is too high.");
    }
    console.log("You have " + tries + "tries left.\n");
}
if (tries === 0 && won == false) {
    console.log("You Lost, You didn't guess correctly in 5 tries.");
}
