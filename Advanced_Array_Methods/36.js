// Every method

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((numbers)=>numbers%2===0);
// console.log(ans);

// Realist example

const userCart = [
    {productsID: 1 , productsName: "laptop" , price: 80000},
    {productsID: 2 , productsName: "mobile" , price: 23000},
    {productsID: 3 , productsName: "computer" , price: 10000},
]

const ans = userCart.every((carditem)=> carditem.price < 300000);
console.log(ans);