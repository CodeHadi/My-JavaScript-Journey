// object destructuring
const band = {
    bandname : "led zeppelin",
    famoussong : "stairway to heaven",
    year : 1986,
    anotherfamoussong : "kashmir"
}
// const bandname = band.bandname;
// const famoussong = band.famoussong;
// console.log(bandname , famoussong);



// Another and easy method
const {bandname:var1 , famoussong:var2 , ...restProps} = band;
console.log(var1);
console.log(restProps);