var array = [10, 2, 5, 1, 9];

array.sort(function(a,b){
    return a - b //this decides whether or not to switch the numbers based (- ) (+) or 0 value .
    //if number is positive then it will switch. if number is negative/zero then the numbers won't switch
    //a is firts number being compared and b is second number being compared
})

console.log(array);