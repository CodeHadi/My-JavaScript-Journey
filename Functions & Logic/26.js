// function very important topic of javascript
//function Expression

// const sumthreenumber = function  (number1,number2,number3){
//     return number1 + number2 + number3
// }
// const returnvalue = sumthreenumber (2,3,5)
// console.log(returnvalue);

const song = function (){
    console.log("happy birthday")
}
song();

//function deceleration

//input : number
//output : true or false

const isEvent = function (number){
  return number % 2 === 0;
        }

console.log(isEvent(2))

//input : string
// output : first character

const firstcharacter = function (pakistan){
    return pakistan[0];
}
console.log(firstcharacter("abc"));



//function 
//input : target and array (number)
//output : index of target if target paresent in array

function findTarget(array,target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target)
        return i;
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget (myArray , 90);
console.log(ans);