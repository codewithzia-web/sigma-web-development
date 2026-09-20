let arr = [1, 2, 3, 4, 5]
// arr[0] = "ali"
console.log(arr)

arr.push("zia")
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.length)
arr.shift()
console.log(arr)
arr.unshift("zia")
console.log(arr)
let arr1 = [55, 66, 70]
arr1.toString()
console.log(arr1)
let joinedArr1 = arr1.join(" and ")
console.log(joinedArr1)
let slicedArr1 = arr1.slice(1, 2)
console.log(slicedArr1)
let arr2 = [1, 2, 3, 4, 5]
console.log(arr2)
let splicedArr2 = arr2.splice(1, 2, "ali", "zia")
console.log(arr2)
console.log(splicedArr2)
let arr3 = [1, 2, 3, 4, 5]
let someArr3 = arr3.some((value) => {
    return value > 3
})
console.log(someArr3)
let everyArr3 = arr3.every((value) => {
    return value > 3
})
console.log(everyArr3)
let arr4 = [1, 2, 3, 4, 5]