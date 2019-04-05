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

// the DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    p.textContent = 'foo'
    //console.log(p.textContent)
    // p remove
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'New element from JavaScript'
document.querySelector('body').appendChild(newParagraph)