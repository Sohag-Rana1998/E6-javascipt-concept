class Person {
  constructor(name, age, vill, thana, zilla) {
    this.name = name;
    this.age = age;
    this.vill = vill;
    this.thana = thana;
    this.zilla = zilla;
  }
  address() {
    console.log(`His name is ${this.name}. He is ${this.age} years old. His village name is ${this.vill}.`)
  }

}

class Student extends Person {
  constructor(name, age, vill, thana, zilla, class1, subject, university) {
    super(name, age, vill, thana, zilla);
    this.class1 = class1;
    this.subject = subject;
    this.university = university;

  }


}

const data = new Person('Shafiq', 26, 'Hakimpur', 'Tetulia', 'Panchagorh');
const data1 = new Student('Shafiq', 26, 'Hakimpur', 'Tetulia', 'Panchagorh', 'Honours 2nd Years', 'English', 'Dhaka');

console.log(data1);