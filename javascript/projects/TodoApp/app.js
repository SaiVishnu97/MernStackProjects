const addbutton=document.querySelector("#Addbutton")
const input=document.querySelector("input")
checkforempty()

function checkforempty()
{
    if(input.value==="")
        addbutton.setAttribute('disabled',true)
    else
        addbutton.removeAttribute('disabled')

}
input.addEventListener('input',()=>
{
    checkforempty()
}
)
addbutton.addEventListener('click',() =>
{
    let enteredtask =input.value
    let newtaskdiv=document.createElement('div')
    newtaskdiv.innerHTML= `<div>${enteredtask}</div><div><i class="fas fa-edit"></i></div> <div><i class="fa-solid fa-trash" id="deletebutton"></i></div>`
    let parttwo=document.querySelector('#parttwo')
    newtaskdiv.setAttribute('id','newtask')
    parttwo.appendChild(newtaskdiv)
    input.value=''
    checkforempty()
    deletebutton=newtaskdiv.querySelector('#deletebutton')
    deletebutton.addEventListener('click',()=>newtaskdiv.remove())
}
)
