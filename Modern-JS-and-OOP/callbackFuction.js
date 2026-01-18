//callback function

function myfunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myfunc (a){
    console.log("hello there i am a func and i can..");
    a("hadi");
}
myfunc(myfunc2);
    