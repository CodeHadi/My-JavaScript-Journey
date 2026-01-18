//lexical scope

const myvar = "value1";

function myapp (){
    function func(){
        // const myvar ="value59";
        const myfucnc = () => {
            console.log("inside myfunction" , myvar);
        }
        
    }


console.log(myvar);
func();
}
myapp();