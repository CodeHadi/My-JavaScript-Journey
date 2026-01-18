//reduce method

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue ;
})

console.log(sum);

const userCart = [
    {productId: 1, productName: "mobile" , price : 1200},
    {productId: 2, productName: "laptop" , price : 12200},
    {productId: 3, productName: "tv" , price : 15000}
]
   


const sum2 = userCart.reduce((totalprice ,currentproducts)=>{
     return totalprice + currentproducts.price;
}, 0)

console.log(sum2);