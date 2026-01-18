// filter method

const number = [3,4,5,8,1];

// const isEvent = function(number){
//     return number%2===0;
// }
// const evennumber = number.filter(isEvent);
// console.log(evennumber);

const isOdd = function(number){
    return number%2!==0;
}
const Oddnumber = number.filter(isOdd);
console.log(Oddnumber);