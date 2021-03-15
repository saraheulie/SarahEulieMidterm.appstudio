myAnimals = ['dog','cat','horse','meerkat']
 
 for (let i= 0; i<=1; i++){
     name = (prompt('Name an animal:').toLowerCase())
     myAnimals.push(name)
     console.log(`The last animal is a/an ${myAnimals[(myAnimals.length - 1)]}`) 
}
