describe( "Tree", () => {
  let tree

  it( 'initializes an instance with one parameter and assigns it to `_species`', () => {
    tree = new Tree( 'Maple' )
    expect( tree._species ).to.eql( 'Maple' )
  } )

  it( 'has a static method `baseDefinition` that returns a sentence on trees', () => {
    expect( Tree.definition() ).to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves." )
  } )

} )

describe( "Deciduous", () => {
  let oak

  it( 'initializes with two parameters, species and name, and uses `super` to set `_species`', () => {
    oak = new Deciduous( 'Oak', 'Professor' )
    expect( oak._species ).to.eql( 'Oak' )
    expect( oak._name ).to.eql( 'Professor' )
  } )

  it( 'has a static method `definition` that uses `super.baseDefinition` and expands on it', () => {
    expect( Deciduous.definition() ).to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually." )
  } )

} )

describe( "Evergreen", () => {
  let fir

  it( 'initializes with two parameters, species and name, and uses `super` to set `_species`', () => {
    fir = new Evergreen( 'Fir', 'Douglas' )
    expect( fir._species ).to.eql( 'Fir' )
    expect( fir._name ).to.eql( 'Douglas' )
  } )

  it( 'has a static method `definition` that uses `super.baseDefinition` and expands on it', () => {
    expect( Evergreen.definition() ).to.eql( "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round." )
  } )

} )