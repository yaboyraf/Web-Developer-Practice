const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('my new note')

// console.log(notes.shift())
// notes.unshift('my first note')

//notes.splice(1, 0, 'this is the new second item')

notes[2] = 'This is now the new note 3'


notes.forEach(function() {
    console.log('testing123')
})

console.log(notes.length)
console.log(notes)