console.log("this is the tutorial for strings in javascript");

let str = "Hello, World!";
// Accessing characters in a string
// console.log(str[0]); // H
// console.log(str.charAt(1)); // e
// console.log(str.charAt(2)); // l
// console.log(str.charAt(3)); // l
// console.log(str.charAt(4)); // o
// console.log(str.charAt(5)); // ,
// console.log(str.charAt(6)); //  
// console.log(str.charAt(7)); // W
// console.log(str.charAt(8)); // o
// console.log(str.charAt(9)); // r
// console.log(str.charAt(10)); // l
// console.log(str.charAt(11)); // d
// console.log(str.charAt(12)); // !

console.log(str[0]); // H
console.log(str[1]); // e
console.log(str[2]); // l
console.log(str[3]); // l
console.log(str[4]); // o
// String length
console.log(str.length); // 13
console.log(str.slice(0, 5)); // Hello
console.log(str.substring(7, 12));
console.log(str.concat(" How are you?")); // Hello, World! How are you?
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase());
console.log(str.trim()); // Hello, World!
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!

let str2 = "Hello, JavaScript!";
let str3 = "Hello, JavaScript!";
console.log("Are the two strings equal? " + (str2) + "are " + (str3)); // true
console.log(`Are the two strings equal? ${str2} are ${str3}`); // true