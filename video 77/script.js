let a = prompt("enter your first number")

let b = prompt("enter your second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this not allow")
}
let sum = parseInt(a) + parseInt (b)
function main(){
    let c = 6;
    try {
        
        console.log("sum in this two digit ", sum*c)
        return true
    } catch (error) {
        console.log("this is error")
        return false
    }finally{
        console.log("thsi is finally")
    }
}
let d = main()