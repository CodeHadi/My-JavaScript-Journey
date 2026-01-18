// nested if else example => {if (if else)esle}

let winningnumber = 19;
let userGuess = +prompt("guss a number") // number ko string ma change krna hai + laga kr ***

if (userGuess === winningnumber) {
    console.log("winner winner chiken dinner")
}else{
    if(userGuess < winningnumber){
        console.log("your gusses is to low")
    }
    else{
        console.log("too high");
    }
}

