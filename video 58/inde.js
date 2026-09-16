
function name(name){
console.log("hey " + name + " i am here")
console.log("hey " + name + " i am good")
console.log("hey " + name + " i am very good")
console.log("hey " + name + " i am happy")
console.log("hey " + name + " i am ")

}
name("zia");
name("ali");

function add(a,b,c){
    return a + b + c;
    // console.log("this is the sum of a and b: " + (a + b));

}   
result = add(5,6,7);
console.log("this is the result: " + result);

const add2 = (a,b,c) => {
    console.log("this is the sum of a and b + c: " + (a + b + c));
}
add2(5,6,7);