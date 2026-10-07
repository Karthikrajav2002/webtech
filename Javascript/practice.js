
let h1=document.querySelector('h1')
let but=document.createElement('button');
let num=0;
but.innerText='click'


but.addEventListener('click',()=>{
    num=num+1
    h1.innerText=num
})
document.body.appendChild(but)