// Different between dot and bracket notation
const key = "email";
const person = {
    name:"Abdul Hadi",
    age:22,
    "person hobbies":["palying cricket","footballer","travellar"]
}

// console.log(person["person hobbies"]);

person[key] = "a.hadi4420386@gmail.com";
console.log(person);