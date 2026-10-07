
let select=document.querySelector('select')
console.log(select);


select.addEventListener('change',(e)=>{
    console.log('changed');
    let color=e.target.value;
    console.log(color)
    document.body.style.background=color;
    
})