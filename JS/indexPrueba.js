function Person(){
    console.log('Hola')
}

let walk = Person.prototype.walk = () => {
    console.log('Caminando')
}

Person()
walk()