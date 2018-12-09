# JavaScript Class Extension Lab: `super`

## Learning Goals

1. Practice building additional functionality into subclasses

## Introduction

In this lab we're going to create a geometry application that allows us to
manipulate different properties of 4-sided shapes (quadrilaterals). We'll be using
JavaScript's `class` keyword to build objects that inherit from its base object,
and variations of `super` to build on existing class functionality.

## Practice Building Additional Functionality Into Subclasses

1. Define a `Quadrilateral` class` that accepts **four** integer parameters.
* Define a `perimeter()` getter method that calculates perimeter.
* Define a `color()` method that checks against each RGB set as an `Array`: 
  - `[255,0,0]` for red
  - `[0,255,0]` for green
  - `[0,0,255]` for blue 
  - `[255,255,0]` for yellow
  - `[0,255,255]` for cyan
  - `[255,0,255]` for magenta
  - `[255,255,255]` for white
  Each conditional will return a `String`, with the value of the color name (ex:
  "red").

  ```js
    if (rgb === [255,0,0]) {
      returns "red"
    } else if...
    ...
    }
  ```

For each of the following child classes you will do the following:
* Use super in the constructor to inherit each side. Add a static
`name` property as the name of the shape _lowercase_.
* Define a method called `sayColor()` that returns  ``The ${this.name} is ${super.color()}.``.
The return value will utilize `super` as a method.

2. Define a `Square` subclass.
* Set the static `name` property to `square`.
* `Square` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Square` that returns "The square is red" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Square` that returns: "A parallelogram in which all the sides are equal and each angle measures 90° is called a square."

3. Define a `Rectangle` subclass.
* Define a static `name` property of `rectangle`.
* `Rectangle` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Rectangle` that returns "The rectangle is green" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rectangle` that returns: "A parallelogram in which each angle is a right angle is called a rectangle."

4. Define a `Trapezoid` subclass.
* Define a static `name` property of `trapezoid`.
* `Trapezoid` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Trapezoid` that returns "The trapezoid is blue" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rectangle` that returns: "In the US, a quadrilateral having exactly one pair of parallel sides is called a Trapezoid."

5. Define a `Rhombus` subclass.
* Define a static `name` property of `Rhombus`.
* `Rhombus` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Rhombus` that returns "The rhombus is yellow" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rhombus` that returns: "A parallelogram having all sides equal, is called a rhombus."

6. Define a `Parallelogram` subclass.
* Define a static `name` property of `parallelogram`.
* `Parallelogram` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Parallelogram` that returns "The parallelogram is cyan" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rhombus` that returns: "A quadrilateral is called a parallelogram, if both pairs of its opposite sides are parallel."

7. Define a `Kite` subclass.
* Define a static `name` property of `kite`.
* `Kite` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Kite` that returns "The kite is cyan" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Kite` that returns: "A quadrilateral is called a kite if it has two pairs of equal adjacent sides but unequal opposite sides."

8. Define a `Trapezium` subclass.
* Define a static `name` property of `trapezium`.
* `Trapezium` inherits `perimeter()` and can calculate perimeter
* Define a method called `sayColor()` on `Trapezium` that returns "The trapezium is white" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Trapezium` that returns: "In the US, a quadrilateral with no parallel sides is called a trapezium."

## Resources

* [Different Types of Quadrilaterals](https://www.math-only-math.com/different-types-of-quadrilaterals.html)
* [Trapezium](http://mathworld.wolfram.com/Trapezium.html)
* [“Super” and “Extends” In JavaScript ES6 - Understanding The Tough Parts](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)