let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pages: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area
// create a function - take fahrenheit - return object with fahrenheit, celsius, kelvin

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.6) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}
let temp = convertFahrenheit(50)

console.log(temp)