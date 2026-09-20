let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
let arr1 = arr.forEach(function (Element, index, array) {
    console.log(Element, index, array)
})
let arr2 = [1, 2, 3, 4, 5]
for (let index of arr2) {
    console.log(index)
}
let obj = {
    name: "Ali",
    age: 20,
    city: "Karachi"
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    
    console.log(key)
}
