class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
    this.color = "black"
  }

  get perimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }

  // unable to get this to work/test
  set setColor(r,g,b) {
    let rbg;
    rgb[0] = r
    rgb[1] = g
    rgb[2] = b
    if (rgb === [255,0,0]) {
      this.color = "red"
    } else if (rgb === [0,255,0]) {
      this.color = "green"
    } else if (rgb === [0,0,255]) {
      this.color = "blue"
    } else if (rgb === [255,255,0]) {
      this.color = "yellow"
    } else if (rgb === [0,255,255]) {
      this.color = "cyan"
    } else if (rgb === [0,255,0]) {
      this.color = "green" 
    } else if (rgb === [255,0,255]) {
      this.color = "magenta" 
    } else if (rgb === [255,255,255]) {
      this.color = "white" 
    } else {
      this.color = "black"
    }
  }
}

class Square extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "square"
    this.description = "A parallelogram in which all the sides are equal and each angle measures 90° is called a square."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "rectangle"
    this.description = "A parallelogram in which each angle is a right angle is called a rectangle."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Trapezoid extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "trapezoid"
    this.description = "In the US, a quadrilateral having exactly one pair of parallel sides is called a Trapezoid."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Rhombus extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "rhombus"
    this.description = "A parallelogram having all sides equal, is called a rhombus."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Parallelogram extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "parallelogram"
    this.description = "A quadrilateral is called a parallelogram, if both pairs of its opposite sides are parallel."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Kite extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "kite"
    this.description = "A quadrilateral is called a kite if it has two pairs of equal adjacent sides but unequal opposite sides."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}

class Trapezium extends Quadrilateral {
  constructor(side1, side2, side3, side4) {
    super(side1, side2, side3, side4)
    this.name = "trapezium"
    this.description = "In the US, a quadrilateral with no parallel sides is called a trapezium."
  }

  sayColor() {
    return `The ${this.name} is ${super.color(this.color)}.`
  }

  description() {
    return this.description
  }
}