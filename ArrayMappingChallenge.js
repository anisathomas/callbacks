// Related to filter, is Array.prototype.map.

// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.

// Complete the following code for the assertion to pass. The result should be an array of numbers
// corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(sides){
  return Math.sqrt(sides.x * sides.x + sides.y * sides.y);

});

// var result = input.map( (sides) => {
//   return Math.sqrt(sides.x * sidesx + sides.y * sides.y)
// }

console.log(result);
console.log(result[0] === 5);//true
console.log(result[1] === 13); //true
console.log(result[2] === 17);//true