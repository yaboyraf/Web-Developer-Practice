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

const filters = {
    searchText: ''
}

// localStorage.setItem('location', 'San Jose')

// console.log(localStorage.getItem('location', ))

// localStorage.removeItem('location')

// localStorage.clear()

// const user = {
//     name: 'Raf',
//     age: 26
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#add-btn').addEventListener('click', function(e) {
    e.target.textContent = 'Notes Added!'
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})