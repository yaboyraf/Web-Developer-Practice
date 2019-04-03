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

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase){
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function(notes, noteTitle) {
    return index = notes.find(function(note, index) {
        return note.title.toLowerCase === noteTitle.toLowerCase
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'travel'))

// const note = findNote(notes, 'General organization')

// console.log(note)

sortNotes(notes)
console.log(notes)

