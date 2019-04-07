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

document.querySelector('#add-btn').addEventListener('click', function(e) {
    e.target.textContent = 'Notes Added!'
})

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})