const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// console.log(notes.pop())
// notes.push('New note')

// //console.log(notes.shift())
// console.log(notes.unshift('My first note'))

//notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'


// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'some other office modification')
console.log(note)

