let arr = [1, 2, 3, 4, 5]
console.log(arr)
let filteredArr4 = arr.filter((value) => {
    return value > 3
})
console.log(filteredArr4)
let findedArr4 = arr.find((value) => {
    return value > 3
})
console.log(findedArr4)
let findIndexArr4 = arr.findIndex((value) => {
    return value > 3
})
console.log(findIndexArr4)
let arr5 = [1, 2, 3, 4, 5]
let mappedArr5 = arr5.map((value) => {
    return value * 2
})
console.log(mappedArr5)
let arr6 = [1, 2, 3, 4, 5]
let reducedArr6 = arr6.reduce((value) => {
    return value * 2
}, 0)
console.log(reducedArr6)

let arr7 = [1, 2, 3, 4, 5]  
let arr8 = [1, 2, 3, 4, 5]
let arr9 = arr7.concat(arr8)
console.log(arr9)