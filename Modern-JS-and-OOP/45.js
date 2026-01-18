//Method

function personinfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "hadii",
    age : 23,
    about : personinfo
}
const person2 = {
    firstName : "Ali",
    age : 24,
    about : personinfo
}
const person3 = {
    firstName : "abdul Rehman",
    age : 15,
    about : personinfo
}
person1.about(),
person2.about(),
person3.about()






// function myfunc(){
//     // "use strict"
//     console.log(this)
// }
// myfunc();
