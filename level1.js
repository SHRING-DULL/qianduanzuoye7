// GET
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    const xhr = new XMLHttpRequest();
      xhr.open("GET","http://39.107.142.107:3000/mock/25/getText")
      xhr.send(JSON.stringify({
          "name":'string',
          "id":'number',
      }))
      xhr.onreadystatechange = function(){
          if(this.readyState === 4){
              if(this.status ===200){
                  console.log(this.responseText)
                  alert("请求成功")
              }else{
                  console.log("请求失败")
              }
          }
      }

})

// POST
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () =>{
    const xhr2 = new XMLHttpRequest()
      xhr2.open("POST","http://39.107.142.107:3000/mock/25/testPost")
      xhr2.setRequestHeader("Content-type","application/json")
      xhr2.send(JSON.stringify({
        "name":'string',
        "id":'number',
    }))
      xhr2.onreadystatechange = function(){
          if(this.readyState === 4){
              if(this.status === 200){
                  alert("请求成功")
                  console.log(this.responseText)
              }else{
                  console.log("请求失败")
              }
          }
      }
      let msg = {
          name:'SamuelMurphy',
          id:2525145
      }
      console.log(JSON.stringify(msg))

})




