/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];
// complete this statement
function isInUK(country) {
  if (ukNations.includes(country)) {
    return country + " is in the UK";
  } else {
    return country + " is not in the UK";
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
