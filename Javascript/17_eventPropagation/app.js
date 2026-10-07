
let inner=document.querySelector('.inner')
let outer=document.querySelector('.outer')
let middle=document.querySelector('.middle')

inner.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('inner div is clicked');
    
}
)
outer.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('outer div is clicked');
    
}
)
middle.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('middle div is clicked');
    
}
)

