// Array methods
const array = [23, 13, 54, 32, 21, 23, 43, 53, 21, 22, 12, 32];

const array2 = [...array, 45, 90];
const array3 = array.slice(2, 8);
const array4 = array.filter(number => number >= 32);
const array5 = array.find(number => number >= 32);


const array6 = array.map(number => number + 10);

console.log(array6);