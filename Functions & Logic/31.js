// defult perameter

// function addtwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;//2015 before method
//     }
//     return a+b;
// }

// function addtwo(a,b=0){
//     return a +b;
// }
// const ans = addtwo(4,8)
// console.log(ans);



//rest perameter:

// function myfucnc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfucnc(1,2,3,4,5,6,7,8,9,10);


function AddAll (...numbers){
   let total = 0;
   for(let number of numbers){
    total = total + number;
   }
   return total;
}
const ans = AddAll(1,2,5,5);
console.log(ans);