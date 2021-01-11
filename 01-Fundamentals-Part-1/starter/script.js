//  let js = 'amazing'
//  console.log(40 + 8 + 23 - 10)


//  console.log('Joseph');
//  console.log(23 + 6, 'Joseph', 'Learner')
 
//  let firstName = 'Ashlee';
//  console.log(firstName)
//  console.log(firstName)
//  console.log(firstName)
//  console.log(firstName)


// let country = 'United States,'
// let continent = 'North America,'
// let population = 331000000
// console.log(country, continent, population)

/*
// boolean
let gusLives = true;
let pepperLives = false;
console.log(typeof gusLives)

//string
gusLives = 'Yes he does!'
pepperLives = 'She has passed on'
console.log(gusLives, pepperLives)
console.log(typeof gusLives)

//number
let gusAge = 3
let pepperAge = 11
console.log(typeof gusAge)
*/
/*
//basic opperators 
const currentYear = 2021
const ageJoseph = currentYear - 2000;
const ageAshlee = currentYear - 1992
console.log(ageAshlee)
console.log(ageJoseph)

console.log(ageAshlee - ageJoseph * 2 / 4)
console.log(2 ** 3)
// 2 ** 3 = this means 2 to the power of 3

firstName = 'Joseph'
lastName = 'White'
console.log(firstName + ' ' + lastName)

//Assignment opperators
let x = 10 + 5 //15
x += 10 //x = x + 10; x = 25
x *= 4 // x = x * 4; x = 100
x++ // x = x + 1
x-- // x = x - 1
x--
console.log(x)


// comparison opperators
console.log(ageJoseph > ageAshlee)
console.log(ageAshlee > 26)
console.log(ageAshlee <= 29)
*/


/*
//coding challenge 1
//test data 1
const markHeight = 1.69
const markWeight = 78
const johnHeight = 1.95
const johnWeight = 92

const markBMI = markWeight / markHeight ** 2
const johnBMI = johnWeight / johnHeight ** 2

const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

// test data 2
const markWeight2 = 95  //kg
const markHeight2 = 1.88 //m
const johnWeight2 = 85 //kg
const johnHeight2 = 1.76 //m

const markBMI2 = markWeight2 / markHeight2 ** 2
const johnBMI2 = johnWeight2 / johnHeight2 ** 2

const markBMIHigher2 = markBMI2 > johnBMI2
console.log(markBMIHigher2)
*/
/*
const firstName = 'Joseph'
const job = 'Programmer'
const birthYear = 2000
const currentYear = 2021

const joseph = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job
console.log(joseph)

//template literals
const josephNew = `I'm ${firstName}, a ${(currentYear - birthYear)} years old ${job}`
console.log(josephNew) // this is WAYYYYYY easier

//multi line string
console.log(`String
multiple 
lines`)
//Get used to always using back tics ``!!!!
*/


/*
const age = 12;
const isOldEnough = age >= 18

if(isOldEnough) {
    console.log(`Sarah can start driving!🚗`)
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is not old enough to drive!❌ She will be able to drive in ${yearsLeft} year`)
}

const birthYear = 2001

let century;
if(birthYear <= 2000){
    century = 20
} else {
    century = 21
}
console.log(century)
*/

/*
// Coding Challenge 2
const markWeight2 = 95  //kg
const markHeight2 = 1.88 //m
const johnWeight2 = 85 //kg
const johnHeight2 = 1.76 //m

const markBMI2 = markWeight2 / markHeight2 ** 2
const johnBMI2 = johnWeight2 / johnHeight2 ** 2

if(markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`)
} else {
    console.log(`John's BMI is higher (${johnBMI2}) than Mark's (${markBMI2})`)
}
*/

/*
// Type conversion
const inputYear = `2000`
console.log(Number(inputYear), inputYear) // logged as a number and a string
console.log(inputYear + 18) // Logged as a string
console.log(Number(inputYear) + 20)

const randomNum = 45
console.log(String(randomNum)) // logged as  a string
console.log(randomNum) // logged as a number

// Type coercion
console.log( `I am ${20} years old`)
console.log(`22` - `33`)
console.log(`43` * `3`)

let n = `1` + 1 // the + will convert the 1 into a string and concatnate it to the `1` = `11`
n = n - 1 // a - will turn the value of n into a number. In this case the value of n is `11` which means that `11` turns into 11. So 11 - 1 = 10
console.log(n)
*/


/*
//FALSY/TRUTHY VALUES   
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Joseph'))
console.log(Boolean({}))

// if the variable here is a falsey value then money will automatically be converted to a false
const money = 0
if(money){
    console.log(`Don't spend it all`)
} else { // hence the else block being executed
    console.log(`You need to get a job`)
}

let height; // height is undefined which makes it a falsy value
console.log(height)
if(height) {
    console.log(`YAY! Height is defined`) //because it is a falsy value it skips over the true section of the if else
} else {
    console.log(`Height is UNDEFINED`) // and returns this section being the false section
}
*/



/*
const age = 18
if(age === 18) console.log(`You just became an adult! (strict)`)
const age2 = `18`
if(age2 == 18) console.log(`You just became an adult! (loose)`) // avoid loose evaluator as much as possible. advised to treat == as if it doesn't even exist

const favorite = Number(prompt(`Whats your favorite number?`))
console.log(favorite)

if (favorite === 32){
    console.log(`Cool, 32 is my favorite number too!`)
} else if(favorite === 7) {
    console.log(`7 is also a cool number!`)
} else {
    console.log(`${favorite} is a cool number!!`)
}

if(favorite !== 32) console.log(`Your favorite number is ${favorite}? Why wouldnt 32 be your favorit number???`)
*/

/*
// practice
const age = 16
if(age >= 20) {
    console.log(`You're getting old`)
} else if(age < 30){
    console.log(`soon you will be 30.`)
}
*/

/*
// Boolean logic: and, or, and not operators
const hasLicense = true;
const hasGoodVision = true;

console.log(hasLicense && hasGoodVision) // true and true = true; true and false = false
console.log(hasLicense || hasGoodVision) // true + true = true; true + false = true; false + false = false
console.log(!hasLicense) // changes it from true to false or false to true

const isTired = true 
console.log(hasLicense || hasGoodVision || isTired) 

if(hasLicense && hasGoodVision && !isTired){
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
}
*/

/*
//coding challenge 3
const dolphinsScore1 = 22 + 120 + 25 / 3 
const koalasScore1 = 22 + 120 +25 / 3
const minimumScore = dolphinsScore1 >= 100
const minimumScore2 = koalasScore1 >= 100

if(dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
    console.log(`The Dolphin's win! Beating the Koalas score of ${koalasScore1} with a score of ${dolphinsScore1}!`)
} else if(dolphinsScore1 < koalasScore1 && koalasScore1 >= 100) {
    console.log(`The Dolphin's score of ${dolphinsScore1} was defeated by the koalas ${koalasScore1} points!`)
} else if(dolphinsScore1 >= 100 && dolphinsScore1 === koalasScore1 && koalasScore1 >= 100) {
    console.log(`The Dolphin's and Koala's tied with a score of ${dolphinsScore1}`)
} else {
    console.log(`No one scored over 100 points`)
}
*/


/*
//switch statement
// const day = `Friday`;

//  switch(day) {
//      case `Monday`: // this is the same as day === `Monday` (meaning that if its true then everything inside it will be run. Much like and if else statement)
         console.log(`Code!`)
         console.log(`Talk with Brad`)
         break
    case `Tuesday`:
        console.log(`See Ashlee`)
        break
    case `Wednesday`:
    case `Thursday`: 
        console.log(`Write code examples`)
        console.log(`Meeting with Jess`)
        break
    case `Friday`:
        console.log(`Code!`)
        console.log(`Spend the evening with Ashlee!`)
        break
    case `Saturday`:
        console.log(`Sav's bridal shower`)
        console.log(`Code!`)
        break
    case `Sunday`:
        console.log(`Go to church!`)
        break
 }
const day = `Sunday`;

if(day === `Monday`) {
    console.log(`Code!`)
} else if(day === `Tuesday`) {
    console.log(`See Ashlee!`)
} else if(day === `Wednesday`) {
    console.log(`Meeting with Jess and Brad`)
} else if(day === `Thursday`) {
    console.log(`Code!!`)
} else if(day ===`Friday`) {
    console.log(`Code!`)
    console.log(`Start the weekend with Ashlee!`)
} else if(day === `Saturday`) {
    console.log(`Code!`)
    console.log(`See Ashlee`)
} else if(day === `Sunday`) {
    console.log(`Go to church!`)
} else {
    console.log(`Invalid entry`)
}
*/
/*
// Statements and Expressions

//expressions area anything that produces a variable. For example:
3 + 5 //This is an expression because it produces a value.
1999 // any number is an expression. Because it will produce an expression in Javascript
true && false && !false // this in the end will produce a boolean value.

// Statement is a bigger piece of code that is executed. But does not produce a value by itself.
if (23 > 10) { //if else is a statement. It doesnt create or produce a value. But rather it executes what is already there.
    const str = `23 is bigger`
}
switch(dog){ // the same goes for a switch statement
    case `Gus`:
        console.log(`Gus is a dog`)
        break
}
*/


// // Ternary operator or conditional opperator: similar to an if else but all in one line.
// const age = 20
// // called TERNARY OPERATOR because it has 3 parts
// age >= 21 /* Part 1: condition*/ ? /* ? = if */ console.log(`I like to buy dry ice.`) /* Part 2: the if part */ : /* : = else */ console.log(`I like to buy normal ice`) /* Part 3: the else part */
// // THIS IS NOT A REPLACEMENT OF IF ELSE STATEMENTS
// const canBuyDryIce = age >= 21 ? '✅ Old enough' : `🚫 Not old enough`
// console.log(canBuyDryIce)

// let ice2 
// if(age >= 21) {
//     ice2 = `✅ Old enough`
// } else {
//     ice2 = `🚫 Not old enough`
// }
// console.log(ice2)

// console.log(`Am I old enough to buy dry ice? ${age >= 21 ? '✅ Old enough' : `🚫 Not old enough`}`)

/*
// Coding challenge 4
const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
console.log(tip)
*/








