const { names,numbers } = require("./data");


// ---------------// first element of array--------------------


function firstElement() {
const firstName = names.shift();
const firstNumber =numbers.shift();
console.log(firstName,firstNumber);
}







// -----------------// all except last of array-----------------

function popLast() {
const popName = names.pop();
const popNumber =numbers.pop();
console.log(names,numbers);
}






// ---------------------show-only-last-element------------------------------------------

function showLast() {
    const lastName = names[names.length-1]
    // new ==> names.at(-1)
    const lastNumber =numbers[numbers.length-1];
console.log(lastName,lastNumber)
}





// -----------------// getElement on nth-index of array-----------------------------------------------

function getNthElement(n){
const isLargeNumber = (element) => element ===n;
if(isLargeNumber > numbers.length || isLargeNumber < 0){
    return indexOf[numbers.length-1];
}
else{
    return numbers.findIndex(isLargeNumber)
}
}






// -----------------//remove element of array ----------------------------------------------

//Method 1 filter(), Method 2 splice()
const getThisElement= (name)=> {
    const newArray = names.filter((item) => item !== name)
    console.log(newArray)
    // names.splice(2,1)
    // console.log(names)
}





// ----------------------// get all unique elements of array-------------------------------

// method 1

// return self.indexOf(value) === index;
// function getUniqueNumbers(value,index,self){
// }

// const unique = numbers.filter(getUniqueNumbers)
// console.log(unique)


// method 2
// --- One-Liner: mit  Set und spread operator

function getUniqueNumbers(){
const arrNums =[1,6,9,2,1,6,7,10];
let uniqueNumbers = [... new Set(arrNums)]
console.log(uniqueNumbers)
}




// -----------// add all numbers of array-----------//
function addAllNumbers() {
  const add = numbers.reduce((a,b)=>a+b,0)
  console.log(add)
}





// -----------random num between two parameters-----------//
function randomNum(a,b) {
   const random = Math.floor((Math.random() * b) + a);
   console.log(random)
}



// --------first letter toUpperCase()------------//
function firstLetterToUpperCase(firstLetter) {
return firstLetter.slice(0,1).toUpperCase() + firstLetter.slice(1).toLowerCase();
}

// --------every letter toUpperCase()------------//

function everyLetterToUpperCase(allLetters) {
    return allLetters.toUpperCase()
}

// --------check first === last letter------------//
function checkLetters (lastLetter, searchLetter) {
    if (lastLetter.slice(-1) === searchLetter){
        return true;
    }
    else{
        return false;
    }
}

// -------------------------export--------------------
module.exports = {
popLast,
firstElement,
showLast,
getNthElement,
getThisElement,
getUniqueNumbers,
addAllNumbers,
randomNum,
firstLetterToUpperCase,
everyLetterToUpperCase,
checkLetters
}