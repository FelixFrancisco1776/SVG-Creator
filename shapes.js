
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
};
