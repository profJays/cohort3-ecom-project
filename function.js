function subscribeSuccessful(){
    alert("Thank You for Subscribing")
}
function greetUser(){
    let userName = prompt("Please Enter Your Name")
    alert("Good evening " + userName)
}
function upCase(){
    let userText = prompt("Please Enter Text")
    const changedText = userText.toUpperCase()
    alert(changedText)
}
function sumNumbers(){
    let num1 = parseFloat(prompt("Please Enter First Number")) 
    let num2 = parseFloat(prompt("Please Enter Second Number"))
    const addedNumbers = num1 + num2
    alert(addedNumbers)
}


//Factorial factorial(n)=n∗(n−1)∗...∗1

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 10;
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);

// Factorial ends here

function sums(num1, num2){
    const added = num1 + num2
    console.log("Result is " + added)
}
sums(32, 15)

//Second method
const sums = function(num1, num2){
    return num1 + num2
}
const vals = sums(8,28)
console.log(vals)

//Third method
const sums = (num1, num2) => {
    return num1 + num2
}
const addedVals = sums(8,28)
console.log(vals)


// function greet(firstName, LastName){
//     console.log("Good evening " + firstName + ' ' + LastName)
// }
// greet('Evans', 'Jay')

// function sums(num1, num2){
//     const added = num1 + num2
//     console.log("Result is " + added)
// }
// sums(32, 15)

// function returnSums(num1, num2){
//     return num1 + num2
// }
// const addedNums = returnSums(13, 23)
// console.log("Result is " + addedNums)