/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
//names.find(findLongNameThatStartsWithA);
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

function findLongNameThatStartsWithA(element) {
  return element.charAt(0) === "A" && element.length > 7;
}

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
