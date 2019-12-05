const btn1 = document.getElementById("button1")
btn1.addEventListener('click',() =>{
    fetch("http://39.107.142.107:3000/mock/25/getText",{
    method:"GET",  
})
.then(response => response.text())
.then(aaa => console.log(aaa))
.then(alert("请求成功"))
.catch(error =>alert("请求失败"))

})


const btn2 = document.getElementById("button2")
btn2.addEventListener('click',() =>{
    fetch("http://39.107.142.107:3000/mock/25/testPost",{
    headers:{"Content-Type":"application/json"},
    method:"POST",
    body:JSON.stringify({
        "name": 'SamuelMurphy',
        "id": 1252525})
})
.then(res => res.text())
.then(res =>console.log(res))
.then(alert("请求成功"))
.catch(error =>alert("请求失败"))

})





