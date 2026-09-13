console.log("Hello from script.js");

let a = 10;
let b = 20;
let c = a + b;
console.log(c + 8);

{
  let a = 5;
  console.log(a);
}
console.log(a);

let d = "zia";
let e = 22;
let f = null;
let g = undefined;
let h = true;
let i = 0.33;

console.log(d, e, f, g, h, i);
console.log(typeof d, typeof e, typeof f, typeof g, typeof h, typeof i);

let o = {
  name: "zia",
  age: 22,
  isStudent: true,
};
console.log(o);
o.salary = 50000;
console.log(o);
delete o.salary;
console.log(o);
o.age = 23;
console.log(o);