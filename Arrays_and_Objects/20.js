//how to iterate object

const person ={
     name : "Abdul hadi",
     age: 23,
     "person hobbies":["palying cricket","footballer","travellar"]
}

//for in loap


for(let key in person){
    console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, ":",person[key]);
}

//object key

// console.log((typeof Object.keys(person)))

// const val =Array.isArray((Object.keys(person)));
// console.log(val);


// for(let key of Object.keys(person)){
//     console.log(person[key])
// }