console.log("this tutorial for classes object");
// let obj = {
//     a:1,
//     b:"zia"
// }
// console.log(obj)

// let animal = {
//     eat: true
// }
// let rabbit = {
//     jump: true
// }
// rabbit.__photo__ = animal;

class animal{
    constructor(name){
        this.name = name
        console.log("hey i am a rabbit")
    }
    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("khood raha hoon")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log("hey i am a rabbit")
    }
    eats(){
        super.eats()
        console.log("kha raha hoon rosao")
    }

}
let a = new animal("bunny");
console.log(a)

let l = new lion("lion");
console.log(l)