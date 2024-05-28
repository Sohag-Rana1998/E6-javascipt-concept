const number = 8;

const numbers = [32, 23, 34, 33];
const person = {
  name: 'sakib khan',
  proff: 'actress'
}

const all = `He is ${person.name}. His age is ${numbers[3]}. His is an ${person.proff}`;



// Arrow function

const square = a => a * a;
const square1 = (a) => a * a;
const add1 = (a, b) => a + b;
const multiply = (a, b) => {
  const result = a * b;
  return result;
}


const object = { x: 2, y: 5, name: 'modhu', age: 25 };

const { x, y, age, ...new1 } = { x: 2, y: 5, name: 'modhu', age: 25 };

console.log(x);
console.log(y);
console.log(age);
console.log(new1);

// Same goes to array

const [first, second, ...remainig] = ['abul', 'babul', 'kabul', 'sabul', 'dablu'];
console.log(first);
console.log(second);
console.log(remainig);

Object.keys(person);
Object.values(person);
Object.entries(person);

// for (const num of numbers) {
//   console.log(num);
// }    This method is used for array or string not in object;


// for (const object in objects) {
//   console.log(object);
// } This Method is valid for Object;