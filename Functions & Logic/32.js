//param dustructuring
//use object and react


const person ={
    firstName: "hadi",
    Gender: "male",
    age: 23,
}

// function printdetails (obj){
//     console.log(obj.firstName);
//     console.log(obj.Gender);
// }

function printdetails ({firstName,Gender,age}){
    console.log(firstName);
    console.log(Gender);
    console.log(age);
}
printdetails(person);