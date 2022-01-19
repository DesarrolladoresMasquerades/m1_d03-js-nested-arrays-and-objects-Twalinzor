// Class code examples

const student1 = { name: "Bob", age: 17 };
const student2 = { name: "Susy", age: 18 };
const student3 = { name: "Ted", age: 18 };

const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
];

console.log(students[1]);

const bob = { name: "Bob", age: 17 };
const susy = { name: "Susy", age: 18 };
const ted = { name: "Ted", age: 18 };

const studentsObj = {
  bob: { name: "Bob", age: 17 },
  susy: { name: "Susy", age: 18 },
  ted: { name: "Ted", age: 18 },
};

// console.log(studentsObj.Susy.age);

console.log(students[1].age);
console.log(students[students.indexOf("Susy")]); // This will not work

studentsObj.hasOwnProperty("Susy");
studentsObj.hasOwnProperty("Marco");

const classroom = {
  marco: { name: "Marco", friends: [{ name: "Paolo", age: 49 }] },
  carlos: { name: "Carlos", friends: [{ name: "Gabriel", age: 45 }] },
  carol: {
    name: "Carol",
    friends: [
      { name: "Bob", age: 17 },
      { name: "Susy", age: 18 },
      { name: "Ted", age: 18 },
    ],
  },
};

console.log(classroom.carlos.friends.length);

for (const friend of classroom.carol.friends) console.log(friend.name);
