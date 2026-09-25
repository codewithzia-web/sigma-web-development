let button = document.getElementById("btn")
button.addEventListener("dblclick", ()=>{
    // alert("i wasc click")
    document.querySelector(".box").innerHTML = "this is the another box"
})
button.addEventListener("contextmenu", ()=>{
    alert("i wasc click")
    // document.querySelector(".box").innerHTML = "this is the another box"
})
button.addEventListener("keydown", (e)=>{
    alert("e, e.key e.keycode")
    // document.querySelector(".box").innerHTML = "this is the another box"
})