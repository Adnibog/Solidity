//This is the first JS code!!!
console.log('Hello World');
let name = 'Pandu';
console.log(name);
let interestRate =0.15;
interestRate = 1;
console.log(interestRate);
let age = 22;
//array in JS
let selectedColors = ['red','blue'];
selectedColors[2]= 'green';
console.log(selectedColors.length);

//function in javascript
//calculating value
function square(number){
    return number*number;
}
console.log(square(768));


//primitive data types
let c=null
let d= 356
let e="Khoi"
let f= Symbol(" I am okay!!!")
let g= true //Boolean
let h= BigInt("434")
let i=undefined
console.log(c,d,e,f,g,h,i)
console.log(typeof c)

//objects in JS
const item=
{
    "pappu":false,
    "govi":true,
    "pand": undefined
}
console.log(item["pappu"])

const dict={
    yakka:"Hard work",
    love:"Hurts",
    try:"more"
}
console.log(dict.yakka)
console.log(dict['love'])

//Expressions in Js
let a= 22;
let b=11;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)

//alert

alert("This is gonna be interesting!!!")
 let x=prompt(" kati barsa ko vayeu???")
x=Number.parseInt(x)
if(x>0)
{
    alert("la thik xa")
}
else
{
    alert(" bijog hune vayo")
}

let num=prompt("Is number divisible?")
num=Number.parseInt(num);
if (num%=2==0 && num%3==0)
{
    console.log("it is divisible")
}
else{
    console.log("Indivisible")
}

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}