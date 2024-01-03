
let url="https://api.quotable.io/random"


fetch(url).then((result)=>result.json()).then((data)=>{

    let authordiv=document.querySelector('#authorname')
    authordiv.textContent=data.author;
    let quotetext=document.querySelector('.quotetext')
    quotetext.textContent=`" ${data.content} " `
})
document.querySelector('button').addEventListener('click',()=>
{
    let fetchresult=fetch(url)
    // console.log(fetchresult)
    
    fetchresult.then((result)=>result.json()).then((data)=>{

        let authordiv=document.querySelector('#authorname')
        authordiv.textContent=data.author;
        let quotetext=document.querySelector('.quotetext')
        quotetext.textContent=`" ${data.content} " `
    }).catch((err)=>console.log("Error"))
    // console.log(fetchresult)
})
let promiseres=new Promise((resolve,reject)=>setTimeout(()=>resolve("Resolved the  promise"),10000))

console.log(promiseres)
setTimeout(()=>console.log(promiseres),10000)

