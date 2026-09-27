console.log("this is promise")
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("this is not random color")
    }
    else{
        
        setTimeout(() => {
            console.log("i am zia")
            resolve("zia")
        }, 1000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("this is not random color")
    }
    else{
        
        setTimeout(() => {
            console.log("i am zia 2")
            resolve("zia 2")
        }, 0);
    }
})
let p3 = Promise.any(prom1, prom2)
p3.then((a)=>{
    console.log("a")
}).catch((err)=>{
    console.log(err)
})