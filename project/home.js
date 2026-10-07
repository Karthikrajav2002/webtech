
let getproducts=async()=>{
    try{
        let res= await fetch('https://fakestoreapi.com/products')
        let data=await res.json()
        console.log(data);

        displayproducts(data);
        

    }catch(err){
        console.log(err)
    }
}

let main=document.querySelector('main')

getproducts();

let displayproducts=(products)=>{

    let loginUser=JSON.parse(localStorage.getItem('loginUser'))

    console.log(loginUser)

    if(!loginUser  )
        return window.location.href='login.html'

    let username=document.getElementById('username')
    username.innerText=loginUser.name;
    

    products.map((product)=>{

        let div= document.createElement('div')
        div.classList.add('card')


        div.innerHTML=`
        <img src=${product.image}>
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.rating.rate}</p>
        <button>Add to cart</button>
        `;

        main.append(div);
    })



}

let logout=document.getElementById('logout')

logout.addEventListener('click',()=>{
    localStorage.removeItem('loginUser')
    window.location.href='login.html'
})