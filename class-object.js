const phones = [
  { name: 'samsung', price: 20000, model: 'A2' },
  { name: 'Huawai', price: 25000, model: 'A2' },
  { name: 'Oppo', price: 28000, model: 'A2' },
  { name: 'Vivo', price: 30000, model: 'A2' }
];

const result = phones.map(m => console.log(m.name));

phones.forEach(m => console.log(m.price));

const result1 = phones.filter(m => m.price > 25000);
console.log(result1);

const result3 = phones.find(m => m.price > 20000);

console.log(result3);

class Teacher {
  constructor(name, subject, address) {
    this.name = name;
    this.subject = subject;
    this.address = address
  }

  lecture() { console.log('He is teaching well') }
}

const tapan = new Teacher('Tapan', 'Math', 'Tetulia');

const rashid = new Teacher('Rashid', 'English', 'Panchagorh');

console.log(rashid);
console.log(tapan);


// what will be the output ?

function min(nums) { return Math.min(nums) }


console.log(min([1, 3, 2]));



const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);

const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }

const { price } = product;
console.log(price);





class Vhicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  run(km) {
    console.log(`the vhicle is very  fast it run ${km} in every hour`)

  }
}

const bus = new Vhicle('Bus', '100000');

bus.run('90');

console.log(bus)