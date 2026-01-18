// how to clone arry (clone means copy){2 array banay hai same item ka maghr us ka ander ka data ak ma change kro to dosera change nhi hon}

let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];                                   // its not a right method
// let array2 = array1.slice(0).concat(."item3","item4")                //first method to clone ***fast method***
// let array2 = [].concat (array1);                                //second method to clone

// new way
// stread operator
let onemorearray = ["item3","item4"]
let array2 = [...array1, ...onemorearray];          //mejority use


console.log (array1===array2)
console.log(array1);
console.log(array2);


array1.push("item3"); // its not a right method