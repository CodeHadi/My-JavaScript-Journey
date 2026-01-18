//sort method
// ASCIT TABLE


// const numbers = [2,4,6,8,10];
// numbers.sort((a,b)=>{
//     return b-a //a-b ;
// })
// console.log(numbers);


// another example 

// const names = ["abdul hadi","hassan","huzaifah","hammad","furqan"];
// names.sort()
// console.log(names);


const products = [
    {productsID: 1 , productsName: "laptop" , price: 80000},
    {productsID: 2 , productsName: "mobile" , price: 23000},
    {productsID: 3 , productsName: "computer" , price: 10000},
    {productsID: 4 , productsName: "mouse" , price: 800},
    {productsID: 5 , productsName: "keyboard" , price: 700}
]

const lowToheigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

const heighTolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(lowToheigh);
console.log(heighTolow);
