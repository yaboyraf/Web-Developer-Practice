// students score, total possible score
// 15/20 -> you got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// undefined for function arguments 
// undefined as function return default value
let gradeCalc = function (score, total) {
    let percent = (score / total) * 100

    if (percent >= 90) {
        return `You got an A! (${percent}%). Wow you are smart`
    } else if (percent >= 80) {
        return `You got a B! (${percent}%). Good job!`
    } else if (percent >= 70) {
        return `You got a C (${percent}%). It's ok you can do better next time`
    } else if (percent >= 60) {
        return `You got a D (${percent}%). Wow, did you study???`
    } else {
        return `You got an F (${percent}%). That's embarrassing.`
    }
}

let grade = gradeCalc(10, 20)

console.log(grade)

