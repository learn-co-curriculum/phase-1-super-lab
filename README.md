# JavaScript Class Extension Lab: `super`

## Learning Goals

1. Practice building additional functionality into subclasses

## Introduction

In this lab we're going to create a geometry application that allows us to
calculate different properties of multiple shape. We'll be using JavaScript's
`class` keyword to build objects that inherit from its base object.

## Practice Building Additional Functionality Into Subclasses

1. Define a `Quadrilateral` class that accepts *four* integer parameters.
* Define a `saturation` property set as `255` that will be inherited by subclasses.
* Define a `perimeter()` method that calculates perimeter.
* Define a conditional `color()` method that checks for red, green, blue, yellow, cyan, magenta, and black. It returns a `String` value of the color name (eg: "red").

2. Define a `Square` subclass.
* Define a static `name` property of `square`.
* Square can calculate perimeter
* Define a setter method that takes `saturation` and sets RGB to 255,0,0 (red)
* Define a method called `sayColor()` on `Square` that returns "The square is red" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Square` that returns: "A parallelogram in which all the sides are equal and each angle measures 90° is called a square."

3. Define a `Rectangle` subclass.
* Define a static `name` property of `rectangle`.
* Rectangle can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to 0,255,0 (green)
* Define a method called `sayColor()` on `Rectangle` that returns "The rectangle is green" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rectangle` that returns: "A parallelogram in which each angle is a right angle is called a rectangle."

4. Define a `Trapezoid` subclass.
* Define a static `name` property of `trapezoid`.
* Trapezoid can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to  0,0,255 (blue)
* Define a method called `sayColor()` on `Trapezoid` that returns "The trapezoid is blue" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rectangle` that returns: "In the US, a quadrilateral having exactly one pair of parallel sides is called a Trapezoid."

5. Define a `Rhombus` subclass.
* Define a static `name` property of `Rhombus`.
* Rhombus can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to 255,255,0 (yellow)
* Define a method called `sayColor()` on `Rhombus` that returns "The rhombus is yellow" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rhombus` that returns: "A parallelogram having all sides equal, is called a rhombus."

6. Define a `Parallelogram` subclass.
* Define a static `name` property of `parallelogram`.
* Parallelogram can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to 0,255,255 (cyan)
* Define a method called `sayColor()` on `Parallelogram` that returns "The parallelogram is cyan" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Rhombus` that returns: "A quadrilateral is called a parallelogram, if both pairs of its opposite sides are parallel."

7. Define a `Kite` subclass.
* Define a static `name` property of `kite`.
* Kite can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to 255,0,255 (magenta)
* Define a method called `sayColor()` on `Kite` that returns "The kite is cyan" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Kite` that returns: "A quadrilateral is called a kite if it has two pairs of equal adjacent sides but unequal opposite sides."

7. Define a `Trapezium` subclass.
* Define a static `name` property of `trapezium`.
* Trapezium can calculate perimeter
* Define a setter method that takes the value from `saturation` and sets an attribute called `rgb` to 255,255,255 (white)
* Define a method called `sayColor()` on `Trapezium` that returns "The trapezium is white" that uses the method from `color()` and the `name` property.
* Define a method called `description()` on `Trapezium` that returns: "In the US, a quadrilateral with no parallel sides is called a trapezium."

## Resources

* [Different Types of Quadrilaterals](https://www.math-only-math.com/different-types-of-quadrilaterals.html)
* [Trapezium](http://mathworld.wolfram.com/Trapezium.html)
* [“Super” and “Extends” In JavaScript ES6 - Understanding The Tough Parts](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)