// all about array methods...today...

let nums = [1,2,3,10]
// iterate a set number of times
for(let i = 0; i < nums.length; i += 1){
  // console.log(nums[i])
}

// more for true/false evaluation..
let i = 0;
let keepRunning = true
while(keepRunning){
  // console.log(nums[i])
  i += 1
  if(i === 4) {
    keepRunning = false
  }
}

// ES5
const sumES5 = function(a,b) {
  return a + b
}
// ES6
// there is an implict return
// if there is only one line of code
const sum1 = (a,b) => a + b
sum1(1,2)
const sum2 = (a,b) => { // (a,b) are params
  return a + b 
}
sum2(1,2) // args are position based

// Array Loopping Methods
// .forEach
// .map
// .filter
// .reduce

// .forEach Looping Method
const words = ["hello", "this", "is", "a", "stickup", "gimme", "your", "wallet"]

for(let i = 0; i < words.length; i += 1){
  //console.log(words[i])
}

// .forEach(callback function)
// callback: () => {} ...is an ES6 anonymous function
// OR
// callback could be a named function
// d is the data, element, thing..at the first pos
// i is it's index position in the array at the sec pos

let consoleLog = (d,i) => console.log(d,i)
// words.forEach( (d,i) => {
//  console.log('forEach', d, i)
// })

// words.forEach(consoleLog)

// Create an array of 3 coding languages
// const codingLangs = ['java', 'javascript','python']
// // User .forEach to console log those language
// let display = d => console.log(d)
// codingLangs .forEach(display)

// Requirement: using the words array...return a new array of those words in upperCase
let newWords = []
words.forEach( (d) => newWords.push(d.toUpperCase()))
// console.log('this is newWords', newWords)
// one limitation to forEach...is that...it doesn't
// return anything

// .map()
// this picks up where .forEach leaves off..
// by that...I mean it returns the element and creates
// a new array
// {} mean return keyword
let newWordsMap = words.map( d => {
  return d.toUpperCase()
})
// console.log('this is newWordsMap', newWordsMap)

// DON"T DO THIZS...this was just a demo of what not to do
// let newWordsMap = words.map( d => {
//   if(d === 'is') {
//     return d.toUpperCase()
//   }
//   return d
// })
// console.log('this is newWordsMap', newWordsMap)


// Requirement: using the numbers array...return a new array of the numbers squared
let numbers = [0,1,2,3,4,5]

// ITERATE over the array
//  SET a new variable called squared
//  MULTIPLE the number by itself and store in squared
//  RETURN the variable called squared
// END ITERATE

// let newNumbers = numbers.map( d => {
//    let squared = d * d
//    return squared
// })
let newNumbers = numbers.map( d => d * d)
// console.log(newNumbers)

// .filter()
// it filters the array...
// it return only those things that match your filter
let newWordsFilter = words.filter( d => d === 'hello')
// console.log('newWordsFilter', newWordsFilter)

let newNumbersFilter = numbers.filter( d => d )
//console.log('newNumbersFilter', newNumbersFilter)

let falsyVals = [0, null, undefined, NaN, '']
let newFalsyValsFilter = falsyVals.filter( d => d )
//console.log('newFalsyValsFilter', newFalsyValsFilter)

// .reduce()
// its meant to reduce an array..
let numsReduce = numbers.reduce( (accumulator, data) => {
  return data + accumulator
})
// , 0 => 0 is the accumulator
// if no accumulator is assigned reduce uses the first value as the accumulator
console.log('this is numsReduce', numsReduce)
