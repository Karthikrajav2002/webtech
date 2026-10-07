
let Input=document.querySelector('input')
let genpass=()=>{

    let small='qwerrtpoiuyasdfglkjhmznxbcv'
    let caps=small.toUpperCase();
    let special='!@#$%&'
    let num='1234567890'

    let pass=''

    let first=caps[Math.floor(Math.random()*caps.length)]
    let second=small[Math.floor(Math.random()*small.length)]
    
    let third=special[Math.floor(Math.random()*special.length)]
    let fourth=num[Math.floor(Math.random()*num.length)]
    
    pass=first+second+third+fourth
    Input.value=pass;
    console.log(pass)

}

let gen=document.querySelector('button')
gen.addEventListener('click',genpass)

let img=document.querySelector('img')
console.log(img)

img.addEventListener('click',()=>{
    if (Input.type==='password'){
        Input.type='text'
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDT9VIzQDMvRH6JxQsEbMDV1AD2BDeypEgxHEF8aLtqf0lkJM5KtJ_hJk&s=10'
    }
    else{
        Input.type='password'
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsP4pGp8sGokhov8__a0QLog3aJKYUSQ56v-sCYXff7EWeOpj9NXpzcxy4&s=10'
    }
    console.log('clicked')
})

let copytext=()=>{
    let input=document.querySelector('input')
    input.select()
    document.execCommand('copy')
    console.log('text copied')
}
