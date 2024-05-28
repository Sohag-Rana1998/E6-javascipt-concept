const arr = [1, 3, 5, 7, 9];
let newArr = [];
for (const num of arr) {
  const num1 = num + 1;
  newArr.push(num1);


}


const newArr1 = arr.map(n => n + 1);


const numbers = [33, 50, 79, 78, 90, 101, 30];

const number = numbers.filter(n => n % 10 === 0);

const number1 = numbers.find(n => n % 10 === 0);




const instructor = [
  { name: 'Nodi', age: 28, position: 'Senior' },
  { name: 'Akil', age: 26, position: 'Junior' },
  { name: 'Shobuj', age: 29, position: 'Senior' }
];


const senior = instructor.filter(n => n.position === 'Senior');

const name1 = senior.map(n => n.name);


const instructor1 = [
  { name: 'Nodi', age: 28, position: 'Senior' },
  { name: 'Akil', age: 26, position: 'Junior' },
  { name: 'Shobuj', age: 29, position: 'Senior' }
];

let totalAge = 0;
for (const name of instructor1) {
  const age = name.age;
  totalAge = totalAge + age;
}

console.log(totalAge);

const sum = instructor1.reduce((preValue, currValue) => preValue + currValue.age, 0);
const sum1 = instructor1.reduce((preValue, currValue) => preValue + currValue['age'], 0);

console.log(sum);
console.log(sum1);
