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

// unix epoch - January 1st 1970 00:00:00
// -
const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('April 1 2019 08:00:00')
const dateTwo = new Date('April 22 2019 08:30:00')
const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(datetwo.toString())
} else {
    console.log('they are the same')
}