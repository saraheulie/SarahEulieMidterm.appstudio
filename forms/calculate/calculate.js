function calcAvgSquare(a, b, c){
  calculation = ((a + b + c)/3) * Math.pow(a,2)
  return calculation
  }

let num1 = Number(prompt('Enter a numnber'))
let num2 = Number(prompt('Enter a numnber'))
let num3 = Number(prompt('Enter a numnber'))

let answer = calcAvgSquare(num1, num2, num3)
alert(`The answer is ${answer}`)
