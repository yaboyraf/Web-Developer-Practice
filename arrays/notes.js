const notes = [{
    title: 'Next trip',
    body: 'Travel somewhere'
}, {
    title: 'Habits to work on',
    body: 'Working out'
}, {
    title: 'General organization',
    body: 'Better cable management'
}]

const findNote = function(notes, noteTitle) {
    return index = notes.find(function(note, index) {
        return note.title.toLowerCase === noteTitle.toLowerCase
    })
}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase === noteTitle.toLowerCase
//     })
//     return notes[index]
// }

const note = findNote(notes, 'General organization')

console.log(note)

