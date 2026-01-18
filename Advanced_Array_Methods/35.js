// important array mehthod 

// foreach
const number = [4,5,6,7];
function myfunc(number , index){
   console.log(`index is ${index} number is ${number}`);
}
// for(let i = 0; i<number.length; i++){
//    multiply(number[i],i);
// }

number.forEach(myfunc); 

// const number = [1,2,3,4,5];
// number.forEach(function(number){
//    console.log(number * 2);
// })


// Real example 

const user =[
   {firstName : "abdul hadi" , age: "23"},
   {firstName : "hassan" , age: "27"},
   {firstName : "huzaifah" , age: "25"},
   {firstName : "hammad" , age: "25"}
]

// user.forEach(function(user){
//    console.log(user.firstName);
// })

for (const users of user) {
   console.log(users.firstName);
}
