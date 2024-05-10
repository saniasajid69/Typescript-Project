#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\t Sania Sajid - Word Counter"));
console.log("=".repeat(60));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words;"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
