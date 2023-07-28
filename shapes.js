class Shape {
    constructor(color) {
        this.color = color || ''; // Default color is an empty string if not provided
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, textColor, text) {
        super(color);
        this.textColor = textColor || 'black'; // Default textColor is black if not provided
        this.text = text || '';
    }

    generateSVG() {
        const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" style="fill:${this.color};"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        return svgContent;
    }
}

class Square extends Shape {
    constructor(color, textColor, text) {
        super(color);
        this.textColor = textColor || 'black'; // Default textColor is black if not provided
        this.text = text || '';
    }

    generateSVG() {
        const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="200" width="200" style="fill:${this.color};"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        return svgContent;
    }
}

class Triangle extends Shape {
    constructor(color, textColor, text) {
        super(color);
        this.textColor = textColor || 'black'; // Default textColor is black if not provided
        this.text = text || '';
    }

    generateSVG() {
        const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:${this.color};"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
        return svgContent;
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
};
