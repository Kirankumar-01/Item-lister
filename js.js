var head = document.getElementById('Headertitle')
head.style.textAlign='center'
head.style.borderBottom='solid black'
head.style.color='deepskyblue'
head.style.fontSize='500%'
var list = document.getElementsByClassName('list-items')
console.log(list)
// list[1].textContent = 'Hello'
// list[1].style.fontSize= '20px'
// list[1].style.fontWeight = 'bold'
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
        li.style.fontSize='200%'
        li.style.fontFamily='robota'

        nameInput.value = ''





}
