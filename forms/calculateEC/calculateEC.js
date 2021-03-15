function calcAvgSquare(a, b, c){
  calculation = ((a + b + c)/3) * Math.pow(a,2)
  return calculation
  }
function divideTwo(a,b){
  return a%b
  }
input= prompt('Do you want to do an average calculation or a remainder of the division of two numbers calculation. \n Type 1 for the average calculation or type 2 for the remainder calculation.')

if (input === "1"){
  num1 = Number(prompt('Enter a numnber'))
  num2 = Number(prompt('Enter a numnber'))
  num3 = Number(prompt('Enter a numnber'))
  let answer = calcAvgSquare(num1, num2, num3)
  alert(`The answer is ${answer}`)
} else {
  num1 = Number(prompt('Enter a numnber'))
  num2 = Number(prompt('Enter a numnber'))
  let answer = divideTwo(num1, num2)
  alert(`The answer is ${answer}`)}