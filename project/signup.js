
let form= document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // get all the input value

    let name=document.getElementById("name").value


    let email=document.getElementById("email").value
    

    let password=document.getElementById("password").value

    

    let confirmPassword=document.getElementById("password2").value

    console.log({name,email,password,confirmPassword})

    // checking all the fields are filled or not
    if(!name || !email || !password || !confirmPassword)
        return alert('fill all the field')
// checking whether the both password are same or not
    if(password != confirmPassword)
        return alert('password wrong')
// we are fetching the user from localstorage

    let users=JSON.parse(localStorage.getItem('users')) || []
    console.log(users);
    
    console.log(Date.now());
// we are creating the new user
    let newuser={
        id:Date.now(),
        name:name,
        email:email,
        password:password
    }
    
    // we are updating the user that we got from the localstorage

    users.push(newuser)

    localStorage.setItem(users,JSON.stringify(newuser))


    console.log('registration successful')
    window.location.href='login.html'
})



