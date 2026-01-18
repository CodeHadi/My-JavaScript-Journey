//hoisting

// hello();
// function hello(){
//     console.log("hello world ");
// }

//function inside function

function app(){
    console.log("hello my world!");

    const func = () =>{
        console.log("hello to my func");
    }

    const addtwo =(num1 , num2)=>{
        return (num1 + num2);
    }

    const nul = (num1 , num2) => num1*num2;
    func();
    console.log(addtwo(4,3));
    console.log(nul(4,3));
}
app();