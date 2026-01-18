//set (it is iterable)
// store data 
// set also have its own method 
//No index-base access
//order is not guaranteed
//unique items only (no duplicated allow)


// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// if(number.has(5)){
//    console.log('1 is presents')
// }
// else{
//     console.log("1 is not presents")
// }
//  console.log(number);
// for(let number of numbers){
//   console.log(number);
// }

// jab ap unique value hon or ap ko value repeated nhi krwani hon jab ap set use krty hon
//length and index property use nhi kr skty
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
let length = 0;
for(let element of uniqueElements){
   length++;
}
console.log(length);