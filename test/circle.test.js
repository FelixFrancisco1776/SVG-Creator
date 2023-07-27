const { Circle } = require("./shapes.js");
const fs = require('fs');

describe("Circle", () => {
  test("generateSVG() should return SVG code for a circle", () => {
    const color = "blue";
    const textColor = "gold";
    const text = "WTF";
    const circle = new Circle(color, textColor, text);

    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" style="fill:blue;"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">WTF</text></svg>`;

    const actualSVG = circle.generateSVG();

    expect(actualSVG).toBe(expectedSVG);
  });

  test("Generated Circle SVG should match logo.svg content", () => {
    const user_shape = new Circle();
    user_shape.setColor('blue');
    const expectedSvgContent = user_shape.generateSVG();

    const logoSvgContent = fs.readFileSync('logo.svg', 'utf8');
    expect(logoSvgContent).toContain(expectedSvgContent);
  });
});
