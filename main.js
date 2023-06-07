function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let min = +prompt("Minimal soni kriting")
let max = +prompt("Maximal soni kiriting")

for (let i = 0; i < 2; i++) {
    let num1 = myRandom(min, max)
    let num2 = myRandom(min, max)
    let user = +prompt(`${num1} + ${num2} = ?`)
    let trueAns = user == num1 + num2 ? `javob tog'ri` : `javob xato, tog'ri javob ${num1 + num2}`
    alert(trueAns)
}
