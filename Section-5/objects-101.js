let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// CHALLENGE AREA
// model a person
// name, age, person
// Raf is 26 and lives in San Jose

let person = {
    name: 'Raf',
    age: 26,
    location: 'San Jose'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
