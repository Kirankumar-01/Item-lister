var head = document.getElementById('Headertitle')
head.style.textAlign='center'
head.style.borderBottom='solid black'
head.style.color='deepskyblue'
head.style.fontSize='500%'
var list = document.getElementsByClassName('list-items')
console.log(list)
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('.in')
const useritems =document.querySelector('#list')
myForm.addEventListener('submit',onsubmit)
function onsubmit(e){
    e.preventDefault()

        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}`))
        useritems.appendChild(li)
        li.style.color='deepskyblue'
        li.style.fontSize='150%'
        li.style.fontFamily='robota'

        nameInput.value = '';
}
function remove(){
    const li = document.getElementById('list')
    li.removeChild(li.lastElementChild)
}