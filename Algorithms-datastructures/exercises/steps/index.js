// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row = 0, stair = ''){
  if(n === row){
    return;
  }

  if(n == stair.length){
    console.log(stair);
    return steps(n,row +1);
  }

  if(stair.length <= row){
    stair += '#';
  }
  else{
    stair+= ' ';
  }
  steps(n,row,stair);
//n = 3
//row = 1
//stair.length = 0
//stair = '##'


}

module.exports = steps;
//EOF

//psuedocode algorithm
//using recursion
//if row === n, hit end of our problem
/*
if stair string length === n, then we are at the end of the row
if length of stair string <= row number, were working on.
add an '#' otherwise add ' '
*/

//
