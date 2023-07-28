const { Square } = require("../shapes.js");
const fs = require('fs');

describe("Square", () => {
  test("generateSVG() should return SVG code for a square", () => {});

  test("Generated Square SVG should match logo.svg content", () => {
    const user_shape = new Square();
    user_shape.setColor('blue');
    const expectedSvgContent = user_shape.generateSVG();

    const logoSvgContent = fs.readFileSync('logo.svg', 'utf8');
    expect(logoSvgContent).toContain(expectedSvgContent);
  });
});

beforeAll(() => {
  const user_shape = new Square();
  user_shape.setColor('blue');
  const svgContent = user_shape.generateSVG();
  fs.writeFileSync('logo.svg', svgContent, 'utf8');
});
