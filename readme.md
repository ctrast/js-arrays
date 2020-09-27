[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Array Iteration Methods
Today, we're going to learn about some Array methods that make transforming data in arrays easier. These methods are also a lot more flexible and powerful than using a loop, with the additional benefit that they are generally considered easier to read.

## Prerequisites

* Array
* JavaScript Function

## Learning Objectives

  - Callback Functions 
  - `forEach()` 
  - `map()`
  - `filter()`
  - `reduce()`
  - `every()`
  - `some()`


<br>

# Introduction (15 min / 0:15)
<img src="https://i.imgur.com/wVPKb5D.png">

JavaScript Arrays have lots of helpful built-in methods.

These methods allow you to write more **declarative/functional** code as opposed to **imperative** code.

## Imperative Programming

Imperative programming is a more step-by-step way of writing code.

`for` loops, for example, are imperative: 

```js
for (let index = 0; index < array.length; index++) {
    // do stuff
}
```

With a `for` loop we're saying:

1. Initialize a looping variable
2. Use the looping variable to access an element in the array
3. Increment the looping variable
4. If the looping variable is less than the length of the array, loop again

## Declarative Programming

In declarative programming, we write code that describes what we want to do:

```js
array.forEach(function(val) {
    // do stuff
});
```

*How* are we iterating? Don't need to worry about that.

<br>

# Callback Functions


<br>

# `.forEach()` (20 minutes / :45)

**PURPOSE:** General purpose iterator method.

Very frequently, we will want to go through an array and do something for every
element in the array.

As an example, we'll loop through the array bellow printing each value one at a
time.

```js
const friends = ["Ross", "Rachel", "Joey", "Monica", "Phoebe", "Chandler"];

for (let i = 0; i < friends.length; i++) {
  console.log(`Sending email to ${friends[i]}`)
}
```

This process of iterating through an array is so common that JavaScript provides
an array method for it called `forEach`. Let's get rid of the `for` loop
and replace it with a `forEach`.

```js
friends.forEach(function(element){
  console.log(`Sending email to ${friends[i]}`)
})

// or 
// ES6 arrow function
friends.forEach((element) => {
  console.log(`Sending email to ${friends[i]}`)
})
```

This will go through each element in the `friends` array and execute the
**`callback`** function for each element in it. **Very important**, notice that we have to pass an argument to the callback, this argument will represent each element in the array.


#### You Do: `.forEach` ( 5 minutes / 0:50)

In your `script.js`, create an array of programming languages you've heard of.
Use `.forEach` to print the message
`"${programmingLanguage} is a programming language!"`, replacing
`${programmingLanguage}` with one of the languages in your array.

<!--
#### Return Value

When using any function or method, it is important to keep in mind the return
value that it will output. With `forEach`, the return value is `undefined`. As
such, we should use `forEach` when we want to _use_ each item in an array to
produce some _side effect_, but **not** to produce a new version of the array.

For example, this would be a misuse of `forEach`:

```js
let letters = ["a", "b", "c"]
let capLetters = letters.forEach(letter => {
  return letter.toUpperCase() //this return is pointless
})
console.log(capLetters)
// => undefined
console.log(letters)
// ["A", "B", "C"]
```
-->

Let's step up the `.forEach` example a bit.

Using the same list of words, let's create a new list of uppercased words.

```js
let newWords = []
words.forEach(word => {
  let uppercased = word.toUpperCase()
  newWords.push(uppercased)
})

console.log(newWords)
// ​​​​​[ 'HELLO', 'THIS', 'IS', 'A', 'STICKUP', 'GIMME', 'YOUR', 'WALLET' ]​​​​​
```

Cool, so we can iterate through a list of words and create a new list from it,
but the example is still a bit rough. We don't like creating functions that have
**side effects** because it's bad practice.

> When a function changes or affects something outside of itself, it's
> considered a side-effect.

There's a much cleaner way. We can create a new, modified version of an array,
without affecting the old array.

Enter the `map` function.

## Break

#### .map() (20 minutes / 1:10)

We've discussed functions that were called for their **side effect** versus
functions that are called for their **return value** or **output**. In the
previous example, we used `forEach` to produce some _side effect_.

Frequently, however, rather than do **something with each** item in an array, we
want to do **something to each** item, applying some transformation and
producing a new, modified version of the array.

`forEach` has a closely related sibling called `map`. The only difference
between the two is that you **must always return something from map**. In
`forEach`, returning anything is pointless.

Using the same `words` array from before, let's do the same transformation (by
capitalizing each word). Only this time, we'll do it better.

We'll start by writing them separately.

```js
function makeUpperCase(word) {
  let upper = word.toUpperCase()
  return upper
}

const uppercaseWords = words.map(makeUpperCase)

console.log(uppercaseWords)
// ​​​​​[ 'HELLO', 'THIS', 'IS', 'A', 'STICKUP', 'GIMME', 'YOUR', 'WALLET' ]
```

Lovely! So let's refactor it now.

```js
const uppercaseWords = words.map(function(word) {
  let upper = word.toUpperCase()
  return upper
})
```

We can condense it even further, by making it into an arrow function and moving
the logic all into one line.

```js
const uppercaseWords = words.map(word => {
  return word.toUpperCase()
})
```

Finally, let's rely on the implicit return of arrow functions for some truly
beautiful code.

```js
const uppercaseWords = words.map(word => word.toUpperCase())
```

Map is truly the greatest.

### You do: mapping the numbers (5 min / 1:15)

Using the array of numbers provided below, write a map function that squares
each number (multiplies it by itself). You should end up with another array of
equal length.

```js
const numbers = [
  15,
  18,
  3921,
  327,
  88,
  1235,
  1,
  55855,
  34,
  5,
  9,
  9019,
  156,
  874,
  76,
  444,
  12346
]
```

### Break (10 min / 1:25)

#### Practicing with Map (15 min, 1:40)

(10 min, 5 Review)

[CodeWars](https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers)

### Filter (20 minutes / 2:00)

Another common procedure is to filter elements from an array based on some
custom condition.

The condition must return true or false. If it returns true, the element is kept
and stored in the new array. If false, it's skipped.

Use the numbers array above for this exercise.

First we'll write the filter function (the custom condition):

```js
function greaterThan100(num) {
  return num > 100
}
```

We can write a loop that uses this function:

```js
const bigNums = []
for (let i = 0; i < numbers.length; i++) {
  if (greaterThan100(numbers[i])) {
    bigNums.push(numbers[i])
  }
}
```

Like `.map()` and `.forEach()`, `.filter()` is available directly on arrays:

```js
const bigNums = numbers.filter(greaterThan100)
```

Or using an anonymous function:

```js
const bigNums = numbers.filter(num => {
  return num > 100
})
```

#### Return Value

`filter` will return a new array composed of items for which the passed in
function **returns true** when called on each item.

#### Practice with Arrays of Objects (15 minutes / 2:15)

> (10 minutes working / 5 minutes discussing)

Use either your `script.js` file you've been working in or open
[repl.it](https://repl.it/languages/javascript).

- Declare a variable `states`.
- Assign to it the array of objects from `capitals.json` in this repo.
  > ⌘+A: Select All, copy & paste
- Using the array iteration methods we were just looking at, create the
  following values (keep track of your answers)

1. Create an array of strings for each capital with the city and state name
   (e.g. `'Austin, Texas'`)
2. Filter all the states with capitals that start with the letter `A`.
3. List all the states with two words in their name.

### [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) (15 minutes / 2:30)

The most flexible array method function is called `reduce`. Reduce, as the name
implies, can take an array and reduce it to a single value. However, since it is
the most flexible of the array iteration methods, it can implement the
functionality of `map`, `filter`, `forEach`, etc.

Reduce is usually difficult to grasp at first; don't stress about this. It is
definitely not something you need to have mastered, it is just good to have an
early awareness. It takes a fair amount of practice to intuitively use
`.reduce()` when solving problems.

#### Example

We can take the sum of an array of numbers (i.e. reduce the set of numbers to a
sum):

```js
const total = [1, 3, 5, 7].reduce((sum, num) => sum + num, 0)
```

Mapping with reduce:

```js
const stickup = words.reduce((instructions, word) => {
  instructions.push(word.toUpperCase())
  return instructions
}, [])
```

Filtering even numbers:

```js
const odds = [1, 2, 3, 4, 5, 6, 7].reduce((odds, num) => {
  if (num % 2) {
    // false if num % 2 === 0
    odds.push(num)
  }
  return odds
}, [])
```

Or count even numbers:

```js
const numEvens = [1, 2, 3, 4, 5, 6, 7].reduce((count, num) => {
  if (!(num % 2)) {
    // false if num % 2 !== 0
    count++
  }
  return count
}, 0)
```

For a step by step of how the mechanics work, check out
[this section on the MDN page for reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#How_reduce_works).

## Trends in Development

Current trends in development are pushing toward using declarative code over imperative code when possible.

This walk-thru summarizes Array _iterator_ methods, that is, methods that declaratively iterate over an array's elements.

<br>

# Method Summary

| Method | Purpose | Returns | Callback Should | Callback's Args |
| --- | --- | :-: | --- | --- |
| `forEach(cb)` | General purpose |`undefined` | Do whatever you want | `(elem, idx, array)` | 
| `map(cb)` | Create new array from source array | new array | Modify each element as desired and return it | `(elem, idx, array)` | 
| `reduce(cb, initAcc)` | Reduce the array to a single value/object | final value of `acc` | Return the new value for `acc` | `(acc, elem, idx, array)` | 
| `filter(cb)` | Filter source array | new array | Return truthy if `elem` is to be included | `(elem, idx, array)` | 
| `find(cb)` | Find an element | the first `elem` found | Return truthy if `elem` is what you're looking for | `(elem, idx, array)` |
| `findIndex(cb)` | Find a certain element's **index** | the index of the first `elem` found | Return truthy if `elem` is what you're looking for | `(elem, idx, array)` |
| `some(cb)` | Check if array has something | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx, array)` |
| `every(cb)` | Check if every `elem` passes condition | `true` or `false` | Return truthy if `elem` is what you're checking for | `(elem, idx, array)` |


Note that each of the methods invoke a callback function for each iteration - _usually_ once for each element, however, the following methods will "short circuit" and stop iterating when the callback returns a truthy value:

- `find`
- `findIndex`
- `some`
- `every` (stops iterating when a falsey value is returned)

> **VOCAB:** Note that the `filter`, `find`, `findIndex`, `some` and `every` iterator methods rely on the truthy-ness or falsey-ness returned by the callback function. Such a function, written to return true/false values, is called a **predicate**. 

Notice that all of the iterator methods, except `reduce`, have identical signatures, that is, they all accept a single argument - a callback function.

Additionally, the signature of the callback functions are all the same as well!

This fact makes it easier to remember the syntax of these important methods, with the `reduce` method being the only one that varies slightly.

#### Bonus: Sort (10 minutes / 2:20)

The `sort` method is another higher-order function.

If no input function is supplied, values are sorted as strings by default.

```js
["chips", "salsa", "guacamole", "cheese", "jalapenos", "sour cream"].sort()
// => [ 'cheese', 'chips', 'guacamole', 'jalapenos', 'salsa', 'sour cream' ]
```

If the elements are not strings, it converts them to strings and sorts based on
**unicode** values (alphabetized but with all uppercase characters before all
lower case characters).

This leads to the odd behavior of `10` being sorted in front of `2`...

```js
[111, 2, 10, 20, 3, -1, 12].sort()
// => [-1, 10, 111, 12, 2, 20, 3]
```

To make the sort method work as expected, you can write a compare function. It
takes two arguments `a` and `b`, which represent any two elements being sorted.

Rather than returning `true` or `false` as in the case of the other test
functions we've looked at, the elements are sorted according to the return value
of the compare function:

- return a negative number if `a` should come before `b`
- return 0 if `a` and `b` are equal
- return a positive number if `a` should come after `b`

```js
function compareNumbers(a, b) {
  return a - b
}

let array = [111, 2, 10, 20, 3, -1, 12]

// with a named function
array.sort(compareNumbers)
// => [-1, 1, 2, 3, 10, 12, 20]

// with an anonymous function
array.sort((a, b) => a - b)
// => [-1, 1, 2, 3, 10, 12, 20]
```

How would we write a compare function to sort our capitals from most northern to
most southern?

### Looking Forward: Callbacks (5 minutes / 2:25)

While array iteration methods are a very common example of higher-order
functions, an even more common time that we want to pass functions as arguments
to other functions is called a callback.

These are ideas we'll cover in depth in a couple of classes but consider the
following at a high level as a primer.

Callbacks passed to another function to be called at some later time.

All the examples that we have looked at use the function being passed as an
argument immediately (and repeatedly).

Callbacks are generally called at some time in the future. What types of things
might we want to trigger a function call on?

### Review and Questions (5 minutes / 2:30)

- Check out the
  [Coding Meetup Kata's](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
  for lots more practice
- [Node School Workshoppers](https://nodeschool.io/#workshoppers) (Functional
  JavaScript elective)
- [Eloquent JS Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)

#### Review

- What is the difference between output and a side effect?
- What is the difference between an argument and a parameter?
- What is the difference between referencing and invoking a function?
