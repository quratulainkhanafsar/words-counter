#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyan("\n \t\t welcome to words counter\n\t"));
console.log("=".repeat(60));
// prompt the user to enter the sentence:
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence"
    }
]);
// trimming the sentence and spliting it into words based on "spaces".
let words = answers.sentence.trim().split(" ");
// analysis of users input sentence:
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
