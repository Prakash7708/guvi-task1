IIFE funtions

//a) print odd numbers using IIFE
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log((arr=>(arr.filter(number=>number % 2 !==0)))([1,2,3,4,5,6,7,8,9])); //[1,3,5,7,9]

//b)Convert all the strings to title caps in a string array
console.log((str=>(str.toUpperCase()))("prakash"));

//c)Sum of all numbers in an array
console.log((arr=>sum = arr.reduce(function (x, y) {
    return x + y;
}, 0))([12,23,45]));

//d)Return all the prime numbers in an array
console.log((str=>(str.filter((n)=>n>1)))([1,2,3,4,5,6]));

//e)Return all the palindromes in an array
console.log((str=>(str.filter((n)=>n%11==0)))([11,121,34]));

// f)Return median of two sorted arrays of the same size
    

//g)Remove duplicates from an array
let arr11 = [1,2,3,1,1,1,4,5]   
let filtered = arr11.filter((item,index)=>arr11.indexOf(item) === index);
    
// h)Rotate an array by k times
function arrayRotate(arr, count) {
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0, count));
    return arr;
  }
for(let i = 0 ; i <= arr.length ; i++) {
    console.log(arrayRotate(arr, i), i);
  };