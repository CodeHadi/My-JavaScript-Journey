// spread operator in array 

// const array1 = ["1","2","3"];
// const array2 = ["4","5","6"];

// const newArray = [...array1, ...array2, 89,27]
// console.log (newArray)

// const newArray = [..."1234567"];
// console.log (newArray)



// spread operator in object

const obj1 = {
    array1 : "value1",
    array2 : "value2"
}
const obj2 = {
    array3 : "value3",
    array4 : "value4"
}
const newobj = {...obj1,...obj2 , array5:"value6"}
console.log(newobj);