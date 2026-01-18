// array descructuring

const Myarray = ["value1","value2","value3","value4"];
// const array1 = [Myarray[0]];
// const array2 = [Myarray[1]];
// console.log(`my value of array1 is`,array1);
// console.log(`my value of array2 is`,array2);

// ******shortcut of js ********

let [array1,array2, ...mynewarray] = Myarray;
// array1 ="change value";
// let mynewarray = Myarray.slice(2)
console.log(`my value of array1 is`,array1);
console.log(`my value of array2 is`,array2);
console.log(mynewarray);