let x = prompt("Enter your number"); // asking for user input
x = Number(x);                      // convert string to number
if(x % 2 == 0){                    // here i am checking condition that my x value is divisible by 2 or not
    console.log(x, "is Even number") // it is divisible by 2 then it is even number
}else{                              
    console.log(x, "is ODD number") //it is not divisible by 2 then it is ODD number
}
