console.log("thsi is code for callback")
console.log("thsi is code for callback 2")


setTimeout(() => {
    console.log("this is timeout")
}, 1000);
setTimeout(() => {
    console.log("this is timeout 3")
}, 0);

console.log("this is the end")
const fn = ()=>{
    console.log("this is fn")
}
const callback = (arg) =>{
    console.log(arg)
}
const loadScript= (scr, callback) => {
    let sc = document.createElement("script");
    sc.scr = scr;
    sc.onload = callback("zia", fn)
    document.head.append(sc)
  
}
loadScript("", callback)