const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('my new note')

// console.log(notes.shift())
// notes.unshift('my first note')

//notes.splice(1, 0, 'this is the new second item')

//CALLBACK FUNCTION = a function passed into a function

notes[2] = 'This is now the new note 3'


notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)