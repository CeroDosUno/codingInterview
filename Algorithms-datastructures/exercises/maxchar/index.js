// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
// use a character map
  const charMap = {};
  let max = 0; //store index
  let maxChar = ''; //store char at the index

  for (let char of str ){
    if(charMap[char]) {
      charMap[char]++;
    }
    else{
      charMap[char] = 1;
    }
  }


  for(let char in charMap){
    if(charMap[char] > max){
        max = charMap[char];
        maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;



/*
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
// use a character map
//pseudo code
//use an object to map all the different maxChars
//store the max key and max value in 2 variables.
//loop until the character with highest amount is found.

//Solution 2

const charMap = {};
let max = 0;
let maxChar = '';

for(let char of str){
  //check to see if char exists. if not, create it
  if(charMap[char]){
    charMap[char]++;
  }
  else {
    charMap[char] = 1;
  }
}

for(let char in charMap){
  if(charMap[char] > max) {
    max = charMap[char];
    maxChar = char;
  }
}

return maxChar;

}

module.exports = maxChar;
*/
