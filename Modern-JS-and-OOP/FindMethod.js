//find method

const myArray = ["hello","cat","dog","lion"];

// function islength3(string){
//    return string.length === 3;
// }

// const ans = myArray.find((string)=>{
//     return string.length === 3;
//  });
// console.log(ans);


// Realist example

const users = [
    {userId: 1 , userName : "hadii"},
    {userId: 2 , userName : "hassan"},
    {userId: 3 , userName : "furqan"},
    {userId: 4 , userName : "huzaifah"},
    {userId: 5 , userName : "farhan"},
]

const ans = users.find((user)=>user.userId===1);
console.log(ans);