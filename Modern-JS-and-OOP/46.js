// call

const user1 ={
    firstName : "hadii",
    age : 23,
    about : function(hobby,favmusician){
        console.log(this.firstName,this.age , hobby ,favmusician)
    }
}
const user2 = {
    firstName : "furqan",
    age : 22
}
user1.about.call(user1 , "guitar","moazrt");
// apply 
user1.about.apply(user2, ["guitar","moazrt"] );
// bind methods
const func = user1.about.bind(user1, ["guitar","moazrt"] );
func();


//small warning {don't do this mistakes }
// const myfunc = user1.about 
// myfunc();

//correct 
const myfunc = user1.about.bind(user1) 
myfunc();


//short syntax

// const user1 ={
//     firstName : "hadii",
//     age : 23,
//     about(hobby,favmusician){             // ya method bhi theek hai or short hai
//         console.log(this.firstName,this.age , hobby ,favmusician)
//     }
// }