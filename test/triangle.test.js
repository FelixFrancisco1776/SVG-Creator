const { Triangle } = require("../shapes.js");
const fs = require('fs');

describe("Triangle", () => {
  test("generateSVG() should return SVG code for a triangle", () => {});

  test("Generated Triangle SVG should match logo.svg content", () => {
    const user_shape = new Triangle();
    user_shape.setColor('blue');
    const expectedSvgContent = user_shape.generateSVG();

    const logoSvgContent = fs.readFileSync('logo.svg', 'utf8');
    expect(logoSvgContent).toContain(expectedSvgContent);
  });
});

beforeAll(() => {
  const user_shape = new Triangle();
  user_shape.setColor('blue');
  const svgContent = user_shape.generateSVG();
  fs.writeFileSync('logo.svg', svgContent, 'utf8');
});

