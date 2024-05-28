const array = [2, 3, 4, 7, 5];

let doubled = [];

for (const num of array) {
  const num1 = num * 2;
  doubled.push(num1);
}



function add(n) {
  const result = n * 2;
  return result;
}

// const result1 = n => n * 2;

const result = array.map(n => n * 2);
console.log(result);
const result1 = array.map(n => n + 2);

const names = ['aryaan', 'babu', 'coushik', 'didarul'];
const result2 = names.map(n => n.length);
console.log(result2);


const isTrue = true;
console.log(!isTrue ? "hello" : "world")