// create functions to create multiple objects

const user = {
    firstName : "Abdul",
    lastName : "hadi",
    age : 23,
    email : "a.hadi4420386@gmail.com",
    address : "house no R/59",
    about : function(){
        return `${this.firstName} is ${this.age} year old.`;
    } ,
    is18 : function(){
        return this.age >= 18;
    }
}