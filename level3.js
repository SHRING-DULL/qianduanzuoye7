const click = document.getElementById("btn")
click.addEventListener("click",() =>{
    let json={
        name:'abc',
        id:2345
    }
    getJSON("http://39.107.142.107:3000/mock/25/testPost",json).then( (json)=>{
        console.log(json)
    },() =>{
        console.log("失败")
    })
})

    const getJSON = function(){

        const promise = new Promise(function(resolve,reject){
            const content = function(){
                if(xhr.readyState!==4){
                    return;
                }
                if(xhr.status === 200){
                    resolve(JSON.stringify(this.response))
                }else{
                    reject()
                }
                
                
            }
            const xhr = new XMLHttpRequest();
            xhr.open("POST","http://39.107.142.107:3000/mock/25/testPost")
            xhr.setRequestHeader("Accept","application/json")
            xhr.onreadystatechange = content
            xhr.send(xhr.responseText)
        })

        return promise;
    }
    



