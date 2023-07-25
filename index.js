// Included packages required for this file.

const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("");


const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please provide a color keyword or a hexadecimal number:",
    },
    {
        type: "input",
        name: "shape",
        message: "Please provide a color keyword or a hexadecimal number:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Which Pixel Image would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (error) {
            return console.log(err);
        }
        console.log("Impressive! You've successfully crafted your image.👏👏👏  Well done!");
    });
}