
let form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let email=document.getElementById('email').value 
    let password= doccument.getElementById('password').value 

    if(!email || !password)
        return alert('fill all the field')

    let users=JSON.parse(localStorage.getItem('users'))

    let loginUser=users.find(user=> user.email===email && user.password===password);

    console.log('login user')

    if (!loginUser)
        return alert('Invalid credentials')
    // we are storing the data of the person who is doing the login

    localStorage.setItem('loginUser',JSON.stringify(loginUser)) 

    console.log('login done')

    window.location.href='home.html'
})