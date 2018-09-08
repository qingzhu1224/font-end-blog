// ES

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.constructor = Point;
Point.prototype.toString = function () {
    return this.x + ',' + this.y;
}

function colorPoint(x, y, color) {
    Point.call(this, x, y);
    this.color = color;
}

colorPoint.prototype = new Point();

colorPoint.prototype.constructor = colorPoint;

colorPoint.prototype.sayColor = function() {
    console.log(this.color);
}

// ES6

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.x + ',' + this.y;
    }
}

class colorPoint{
    constructor(x,y,color) {
        super(x,y);
        this.color = color;
    }
    sayColor() {
        console.log(this.color);
    }
}