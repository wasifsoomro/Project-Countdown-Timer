#!/usr/bin/env node
import { startCountDownSeconds } from "./second.js";
import { startCountDownMinutes } from "./minutes.js";
import { startCountDownHours } from "./hours.js";
import inquirer from "inquirer";
//I imported all necessary file i need and inquirer library
//Get input from user 
let { User } = await inquirer.prompt({
    type: "list",
    name: "User",
    message: "Choose Timer you want to run",
    choices: ["Seconds", "Minutes", "Hours"]
});
//Create a switch statement its working depend on user input 
switch (User) {
    case "Seconds":
        await startCountDownSeconds();
        break;
    case "Minutes":
        await startCountDownMinutes();
        break;
    case "Hours":
        await startCountDownHours();
        break;
    default:
        console.log("Select valid timer");
        break;
}
