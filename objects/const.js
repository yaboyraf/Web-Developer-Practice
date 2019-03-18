//students score, total possible score
//15/20 -> you got a C (75%)
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculator = function(score, total) {
    const percentScore = (score / total) * 100;
    let letterGrade = ''

    if (percentScore >= 90) {
        letterGrade = 'A'
    } else if (percentScore >= 80) {
        letterGrade = 'B'
    } else if (percentScore >= 70) {
        letterGrade = 'C'
    } else if (percentScore >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `With a score of ${score}/${total}(${percentScore}%), your letter grade is: ${letterGrade}`
}


const result = gradeCalculator(19, 20)
console.log(result)