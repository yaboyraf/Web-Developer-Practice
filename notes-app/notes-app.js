let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#add-btn').addEventListener('click', function(e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
}) 

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
   if(e.key === notes) {
       notes = JSON.parse(e.newValue)
       renderNotes(notes, filters)
   }
})

// const now = moment()
// now.subtract(1, 'year').subtract(10, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()

// console.log(moment(nowTimeStamp).toString())

const date = moment()

date.year(1993).month(2).date(24)

console.log(date.format('MMMM D, YYYY'))

