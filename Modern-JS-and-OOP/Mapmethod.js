//map*** very importantant method

// const number = [3,4,5,8,1];

// const square = function(number){
//      return number * number;  //return compelsory
// }

// const squarenumber = number.map((number,index)=>{
//     return `index: ${index}, ${number * number}`;
// });
// console.log(squarenumber);



//real example

const user =[
    {firstName : "abdul hadi" , age: "23"},
    {firstName : "hassan" , age: "27"},
    {firstName : "huzaifah" , age: "25"},
    {firstName : "hammad" , age: "25"}
 ];

 const userName = user.map((users)=>{
    return users.firstName;
 })
 console.log(userName);