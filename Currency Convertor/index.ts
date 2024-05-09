#! /usr/bin/env node

import inquirer from "inquirer";





let currency:any = {
    USD: 1,
    PKR: 278.50,
    INR: 83.38,
    EUR: 0.93,
    JY: 152.90
}


let answer = await inquirer.prompt([
{
    type: "list",
    name: "fromCurrency",
    choices: ["USD","PKR","INR","EUR","JPY"],
    message: "Select From Currency: "

},
{
    type: "list",
    name: "toCurrency",
    choices: ["USD","PKR","INR","EUR","JPY"],
    message: "Select to Currency: "

},
{
    type: "number",
    name: "amount",
    message: "Enter amount to convert: "

}

]);
console.log(answer.fromCurrency);
console.log(answer.toCurrency);
console.log(answer.amount);


let baseAmount = answer.amount / currency[answer.fromCurrency];

let ans = baseAmount * currency[answer.toCurrency];

console.log("Converted Amount = "+ ans);
