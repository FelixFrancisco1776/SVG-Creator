const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");

class Svg {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.generateSVG(); // changed the method name here
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.error(err); //fixed the error
        } else {
            console.log("Impressive! You've successfully crafted your image.👏👏👏  Well done!");
        }
    });
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to (3) Characters:",
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
            return "Please enter up to 3 characters only.";
        },
    },
    {
        type: "input",
        name: "text-color",
        message: "Please provide a color keyword or a hexadecimal number for text color:",
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please provide a color keyword or a hexadecimal number for the shape color:",
    },
    {
        type: "list",
        name: "shape",
        message: "Which Pixel Image would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

async function init() {
    console.log("Starting init");
    var svgString = "";
    var svg_file = "logo.svg";

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    var user_text = "";
    if (answers.text.length > 0 && answers.text.length <= 3) {
        user_text = answers.text;
    } else {
        console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
    }
    console.log("User text: [" + user_text + "]");
    
    const user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");
    //user shape color
    const user_shape_color = answers["shape-color"];
    console.log("User shape color: [" + user_shape_color + "]");
    //user shape type
    const user_shape_type = answers.shape;
    console.log("User entered shape = [" + user_shape_type + "]");

    //user shape
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle shape");
    }
    else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);

    // Create a new Svg instance and add the shape and text elements to it
    const svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    //Print shape to log
    console.log("Displaying shape:\n\n" + svgString);

    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
}

init();
