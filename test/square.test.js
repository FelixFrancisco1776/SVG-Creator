const { Square } = require("./shapes.js");
const fs = require('fs');

describe("Square", () => {
  test("generateSVG() should return SVG code for a square", () => {
    const color = "blue";
    const textColor = "gold";
    const text = "WTF";
    const square = new Square(color, textColor, text);

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="200" width="200" style="fill:blue;"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">WTF</text></svg>`;

    const actualSVG = square.generateSVG();

    expect(actualSVG).toBe(expectedSVG);
  });

  test("Generated Square SVG should match logo.svg content", () => {
    const user_shape = new Square();
    user_shape.setColor('blue');
    const expectedSvgContent = user_shape.generateSVG();

    const logoSvgContent = fs.readFileSync('logo.svg', 'utf8');
    expect(logoSvgContent).toContain(expectedSvgContent);
  });
});
