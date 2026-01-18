// for of loop in array                *****ya hum buth use krty hai*******

// const fruits = ["apple","mango","banana","apple","mango","banana"];
// let fruit2 = [];
// for(let fruit of fruits){
//    fruit2.push(fruit.toUpperCase())
// }
// console.log(fruit2)









// for in loop in array                 ****** index dy dy gai ya sary******

const fruits = ["apple","mango","banana","apple","mango","banana"];
let fruit2 = [];
for(let index in fruits){
   fruit2.push(fruits[index].toUpperCase())
}

console.log(fruit2)


 // 2 loop hum buth use krty hai ak for loop and for of loop
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}