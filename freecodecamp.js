// FREE CODE CAMP PROBLEMS

// record collection problem with arrays and objects
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if (value === "") {
      delete collection[id][prop]
    } else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || []
      collection[id][prop].push(value)
    } else {
      collection[id][prop] = value
    }
  
    return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "tracks", "tracks")
  console.log(updateRecords(5439, "artist", "ABBA"));

// for loops

// Setup
var myArray = [];

// Only change code below this line.
for (let i = 1; i <= 5; i++) {
  myArray.push(i)
}
console.log(myArray)

// Setup
let myArray = [];

// Only change code below this line. increments of two
for (let i = 1; i <= 9; i +=2){
  myArray.push(i)
}

console.log(myArray)

// Setup
let myArray = [];

// Only change code below this line. counting backwards
for (let i = 9; i >= 1; i -=2) {
  myArray.push(i)
}

console.log(myArray)

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for(let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

console.log(myArr)