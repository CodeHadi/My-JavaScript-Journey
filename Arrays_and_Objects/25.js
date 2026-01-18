
//nested destructuring

const users = [
    {userID : 1, firstname:"huzaifa", gender : "male" },
    {userID : 2, firstname:"hassan", gender : "male" },
    {userID : 3, firstname:"hadi", gender : "male" }
]
const [{firstname: user1firstname, userID}, ,{gender}] = users;
console.log(user1firstname);
console.log(userID);
console.log(gender);