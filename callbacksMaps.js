var words = ["ground", "control", "to", "major", "tom"];

function map(array, callbackfunc){

  var emptyArray = [];

  for (value of array){
    emptyArray.push(callbackfunc(value));
  }
  console.log(emptyArray);
}

// function map(array, callBackFunc) {
//  var result = []; //create an empty array
//  for(i = 0; i < array.length; i++) { //looping through our array words
//    result.push(callBackFunc(array[i])); //push value of our callback function into the array
//    }
//    console.log(result);
// }



 map(words, function(word) {
  return word.length;
});

map(words, function(name) {
  return name.toUpperCase();
 });

map(words, function(word) {
  return word.split('').reverse().join('');
 });



// expected output:
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
