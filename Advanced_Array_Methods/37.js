// some method 

const number = [3,5,8,9];

//ak bhi number asa hai jo even hai
//ture 

// const myArray =number.some((number)=>number%2===0)
// console.log(myArray);

const userCard =[
    {productId:1 ,productName:"mobile",price:12000},
    {productId:2 ,productName:"laptop",price:220000},
    {productId:3 ,productName:"TV",price:35000 },
    {productId:4 ,productName:"mackbook",price:250000},
]

// koi asa products hai meri products ma jis ki qamat 50000 say upper ja rahi hon

const ans = userCard.some((carditem)=>carditem.price >= 5000);
console.log(ans);