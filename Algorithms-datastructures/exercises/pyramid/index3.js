// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
//solution 3
//n = 3
//row = 1
//column = 3 ,0-5
//midpoint = 2
//level = ''
  const midpoint = Math.floor((2*n-1)/2);
  for(let row = 0; row < n; row++){
    let level = '';

    for(let column = 0; column < 2 * n -1; column++){
      if(midpoint - row <= column && midpoint + row >= column){
        level += '#';
      }
      else{
        level += ' ';
      }
    }

    console.log(level);
  }

}

module.exports = pyramid;
//algorithm psuedocode
//for 0 to n rows
// create string levels
//from 0 to columns
//->if clumn should have a #
//-->add a # to level
//else
//--> add a space to level
//console log stair


//EOF
