//store data in order fashion 

//store value pair like object

//duplicate key is not allowed like object

//different between map and object 

//object can only have string or symbol
//as a key

//in map you can use any thing as key   
//like array , number  string

//******************************* */
// Object is not a  literal
// key--->string
// key--->symbol
// const person = {
//     firstName : "hadi",
//     age : 23,
//     1:"one"
// }
// // console.log(person.firstName)
// // console.log(person["firstName"]);
// for(let key in person){
//   console.log(typeof key);
// }
//******************************* */
//map is an iterable
// map key value ko store kay ga
// const person = new Map();
// person.set("firstName","hadi")
// person.set("age","23")
// person.set("1","one")
// console.log(person)
// console.log(person.get(1))
// for(let key of person.keys()){
//   console.log( key,typeof key);}

// for(let [key,value] of person){
//     console.log(key ,value)
// }

// another way to use 
const person1 = {
    id:1,
    firstName:"Abdul"
}
const person2 = {
    id:2,
    firstName:"hadii"
}
const extrainfo = new Map()
extrainfo.set(person1,{age:8 , gender : "male"})
extrainfo.set(person2,{age:8 , gender : "male"})
console.log(extrainfo.get(person1).gender)
console.log(extrainfo.get(person2).gender)
// realestic Example