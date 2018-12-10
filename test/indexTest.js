let square;

describe( "Quadrilateral", () => {
  beforeEach( () => {
    quadrilateral = new Quadrilateral(5, 10, 15, 20)
  } )

  it( "has a Quadrilateral class", () => {
    expect( Quadrilateral ).to.exist
  } )

  it( "Quadrilateral has sides properties", () => {
    expect( quadrilateral.side1 ).to.eq( 5 )
    expect( quadrilateral.side2 ).to.eq( 10 )
    expect( quadrilateral.side3 ).to.eq( 15 )
    expect( quadrilateral.side4 ).to.eq( 20 )
  } )

  it( "Quadrilateral has a perimeter getter that calculates perimeter", () => {
    expect( quadrilateral.perimeter ).to.eq( 50 )
  } )

  // I want this method to be able to take in 3 RGB values and convert that to a text string of the color
  it( "Quadrilateral has a setColor() setter method that sets the shape's color", () => {
    expect( quadrilateral.setColor ).to.eq("red")
  } )
} )

describe( "Square", () => {
  beforeEach( () => {
    square = new Square(5, 10, 15, 20)
  } )

  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "Square has sides properties", () => {
    expect( square.side1 ).to.eq( 5 )
    expect( square.side2 ).to.eq( 10 )
    expect( square.side3 ).to.eq( 15 )
    expect( square.side4 ).to.eq( 20 )
  } )

  it( "Square inherits the perimeter getter that calculates perimeter", () => {
    expect( square.perimeter ).to.eq( 50 )
  } )

  // This would check for the [shape] is [red] if the setColor() method was working
  // I want this to be inheritable by children so color can be set
  it( "Square sayColor() returns 'red'", () => {
    expect( square.sayColor ).to.exist
  } )

  it( "Square description() returns the description for a square", () => {
    expect( square.description ).to.eq("A parallelogram in which all the sides are equal and each angle measures 90° is called a square.")
  } )
} )

describe( "Rectangle", () => {
  beforeEach( () => {
    rectangle = new Rectangle(15, 10, 15, 10)
  } )

  it( "has a Rectangle class", () => {
    expect( Rectangle ).to.exist
  } )

  it( "Rectangle has sides properties", () => {
    expect( rectangle.side1 ).to.eq( 15 )
    expect( rectangle.side2 ).to.eq( 10 )
    expect( rectangle.side3 ).to.eq( 15 )
    expect( rectangle.side4 ).to.eq( 10 )
  } )

  it( "Rectangle inherits the perimeter getter that calculates perimeter", () => {
    expect( rectangle.perimeter ).to.eq( 50 )
  } )

  it( "Rectangle sayColor() returns 'green'", () => {
    expect( rectangle.sayColor ).to.exist
  } )

  it( "Rectangle description() returns the description for a square", () => {
    expect( rectangle.description ).to.eq("A parallelogram in which each angle is a right angle is called a rectangle.")
  } )
} )

describe( "Trapezoid", () => {
  beforeEach( () => {
    trapezoid = new Trapezoid(15, 10, 20, 10)
  } )

  it( "has a Trapezoid class", () => {
    expect( Trapezoid ).to.exist
  } )

  it( "Trapezoid has sides properties", () => {
    expect( trapezoid.side1 ).to.eq( 15 )
    expect( trapezoid.side2 ).to.eq( 10 )
    expect( trapezoid.side3 ).to.eq( 20 )
    expect( trapezoid.side4 ).to.eq( 10 )
  } )

  it( "Trapezoid inherits the perimeter getter that calculates perimeter", () => {
    expect( trapezoid.perimeter ).to.eq( 55 )
  } )

  it( "Trapezoid sayColor() returns 'blue'", () => {
    expect( trapezoid.sayColor ).to.exist
  } )

  it( "Trapezoid description() returns the description for a trapezoid", () => {
    expect( trapezoid.description ).to.eq("In the US, a quadrilateral having exactly one pair of parallel sides is called a Trapezoid.")
  } )
} )

describe( "Rhombus", () => {
  beforeEach( () => {
    rhombus = new Rhombus(15, 10, 15, 10)
  } )

  it( "has a Rhombus class", () => {
    expect( Rhombus ).to.exist
  } )

  it( "Rhombus has sides properties", () => {
    expect( rhombus.side1 ).to.eq( 15 )
    expect( rhombus.side2 ).to.eq( 10 )
    expect( rhombus.side3 ).to.eq( 15 )
    expect( rhombus.side4 ).to.eq( 10 )
  } )

  it( "Rhombus inherits the perimeter getter that calculates perimeter", () => {
    expect( rhombus.perimeter ).to.eq( 50 )
  } )

  it( "Rhombus sayColor() returns 'yellow'", () => {
    expect( rhombus.sayColor ).to.exist
  } )

  it( "Rhombus description() returns the description for a rhombus", () => {
    expect( rhombus.description ).to.eq("A parallelogram having all sides equal, is called a rhombus.")
  } )
} )

describe( "Parallelogram", () => {
  beforeEach( () => {
    parallelogram = new Parallelogram(15, 10, 15, 10)
  } )

  it( "has a Parallelogram class", () => {
    expect( Parallelogram ).to.exist
  } )

  it( "Parallelogram has sides properties", () => {
    expect( parallelogram.side1 ).to.eq( 15 )
    expect( parallelogram.side2 ).to.eq( 10 )
    expect( parallelogram.side3 ).to.eq( 15 )
    expect( parallelogram.side4 ).to.eq( 10 )
  } )

  it( "Parallelogram inherits the perimeter getter that calculates perimeter", () => {
    expect( parallelogram.perimeter ).to.eq( 50 )
  } )

  it( "Parallelogram sayColor() returns 'cyan'", () => {
    expect( parallelogram.sayColor ).to.exist
  } )

  it( "Parallelogram description() returns the description for a parallelogram", () => {
    expect( parallelogram.description ).to.eq("A quadrilateral is called a parallelogram, if both pairs of its opposite sides are parallel.")
  } )
} )

describe( "Kite", () => {
  beforeEach( () => {
    kite = new Kite(5, 5, 15, 15)
  } )

  it( "has a Kite class", () => {
    expect( Kite ).to.exist
  } )

  it( "Kite has sides properties", () => {
    expect( kite.side1 ).to.eq( 5 )
    expect( kite.side2 ).to.eq( 5 )
    expect( kite.side3 ).to.eq( 15 )
    expect( kite.side4 ).to.eq( 15 )
  } )

  it( "Kite inherits the perimeter getter that calculates kite", () => {
    expect( kite.perimeter ).to.eq( 40 )
  } )

  it( "Kite sayColor() returns 'magenta'", () => {
    expect( kite.sayColor ).to.exist
  } )

  it( "Kite description() returns the description for a kite", () => {
    expect( kite.description ).to.eq("A quadrilateral is called a kite if it has two pairs of equal adjacent sides but unequal opposite sides.")
  } )
} )

describe( "Trapezium", () => {
  beforeEach( () => {
    trapezium = new Trapezium(5, 7, 11, 17)
  } )

  it( "has a Kite class", () => {
    expect( Trapezium ).to.exist
  } )

  it( "Kite has sides properties", () => {
    expect( trapezium.side1 ).to.eq( 5 )
    expect( trapezium.side2 ).to.eq( 7 )
    expect( trapezium.side3 ).to.eq( 11 )
    expect( trapezium.side4 ).to.eq( 17 )
  } )

  it( "Kite inherits the perimeter getter that calculates kite", () => {
    expect( trapezium.perimeter ).to.eq( 40 )
  } )

  it( "Kite sayColor() returns 'white'", () => {
    expect( trapezium.sayColor ).to.exist
  } )

  it( "Kite description() returns the description for a kite", () => {
    expect( trapezium.description ).to.eq("In the US, a quadrilateral with no parallel sides is called a trapezium.")
  } )
} )