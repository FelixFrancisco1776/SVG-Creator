const { Triangle } = require("../shapes.js");
const fs = require('fs');

describe("Triangle", () => {
  test("generateSVG() should return SVG code for a triangle", () => {
    const color = "blue";
    const textColor = "gold";
    const text = "wtf";
    const triangle = new Triangle(color, textColor, text);

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:blue;"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">wtf</text></svg>`;

    const actualSVG = triangle.generateSVG();

    expect(actualSVG).toBe(expectedSVG);
  });

  test("Generated Triangle SVG should match logo.svg content", () => {
    const user_shape = new Triangle();
    user_shape.setColor('blue');
    const expectedSvgContent = user_shape.generateSVG();

    const logoSvgContent = fs.readFileSync('logo.svg', 'utf8');
    expect(logoSvgContent).toContain(expectedSvgContent);
  });
});
