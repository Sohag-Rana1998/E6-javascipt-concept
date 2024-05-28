const number = [12, 13, 35, 17, 14, 24, 54];

// const result = number.forEach(a => console.log(a));


// const result = number.forEach(num => {

// });



// const result = number.filter(num => num % 2 === 0);

// const result = number.filter(num => num % 2 === 1);

// const result = number.filter(num => num > 20);


// Output only one value which is match the condition

// const result = number.find(num => num > 20);




const result = number.reduce((p, c) => p + c, 0);
// const result = number.find(num => num > 20);

console.log(result);