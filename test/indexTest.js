describe( "Tree", () => {
  let tree

  it( 'initializes an instance with one parameter and assigns it to `species`', () => {
    tree = new Tree( 'Maple' )
    expect( tree.species )
      .to.eql( 'Maple' )
  } )

  it( 'has a static method `definition` that returns a sentence on trees', () => {
    expect( Tree.definition() )
      .to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves." )
  } )

} )

describe( "Deciduous", () => {
  let oak

  it( 'initializes with two parameters, species and name, and uses `super` to set `species`', () => {
    oak = new Deciduous( 'Oak', 'Professor' )
    expect( oak.species )
      .to.eql( 'Oak' )
    expect( oak.name )
      .to.eql( 'Professor' )
  } )

  it( 'has a static method `definition` that uses `super.definition` and expands on it', () => {
    expect( Deciduous.definition() )
      .to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually." )
  } )

} )

describe( "Evergreen", () => {
  let fir

  it( 'initializes with two parameters, species and name, and uses `super` to set `species`', () => {
    fir = new Evergreen( 'Fir', 'Douglas' )
    expect( fir.species )
      .to.eql( 'Fir' )
    expect( fir.name )
      .to.eql( 'Douglas' )
  } )

  it( 'has a static method `definition` that uses `super.definition` and expands on it', () => {
    expect( Evergreen.definition() )
      .to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round." )
  } )

} )
