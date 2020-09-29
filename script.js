console.log("Here");

//Imperative
// for (let i = 0; i < 10; i++) {
//   console.log("i :>> ", i);
// }

//declarative (functional)
const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

// friends.forEach((element) => {
//   console.log(`Sending email to ${element}`);
// });

/********************************** */
//this is a callback function because it being passed as an argument
//to the forEach method. name is an argument
const sendEmail = (name)=>{
    console.log(`Sending callback email to ${name}`);
}
//this line of code calls the funtion sendEmail
friends.forEach(sendEmail); 
/********************************** */
//combined
friends.forEach((name, index, array) => {
    console.log(`Sending callback email to ${name} and ${index}`);
}) 


const proLang=["Java","JavaScript","GO", "Perl","Visual Basic"];
proLang.forEach((language) =>{
    console.log(`Language is ${language}`);
})

/********************************** */
// this is a callback function
sayHello = function (name) {
  return `Hi, ${name}!`;
};
// this is a callback function
sayGoodBye = function (name) {
    return `See ya, ${name}!`;
  };

// this is my higher-order function
sendMessage = function (somefunction) {
  return somefunction+" function returns here";
};

console.log(sendMessage(sayHello("Robert"))); // output:=>  'Hi, Robert!'
console.log(sendMessage(sayGoodBye("Robert"))); // output:=>  'Hi, Robert!'
/********************************** */

