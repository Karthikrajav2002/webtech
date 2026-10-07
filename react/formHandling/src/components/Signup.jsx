import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const Signup = () => {
        let [username,setUsername]=useState('')
        let [email,setEmail]=useState('')
        let [password,setPassword]=useState('')

        let navigate=useNavigate('/login')


    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log('form is submitted')

      if (!username || !email || !password) {
        toast.error('please fill all the fields')
        return;
      }
      let user=localStorage.setItem('user',JSON.stringify({username,email,password}))

      setTimeout(()=>{
      toast.success('signup successful')},2000)

        setUsername('')
        setEmail('')
        setPassword('') 

        setTimeout(()=>{
          navigate('/login')
        },2000)
    }

    // let users=localStorage.getItem(user) || []
    

    
  return (
    <div className='signup'>
        <h1>signup page</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input
         type="text" 
         placeholder='your name'
         value={username}
         onChange={(e)=>{setUsername(e.target.value)}}
        />

        <label htmlFor="">email</label>
        <input type="text" 
        placeholder='your email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        />

        <label htmlFor="">password</label>
        <input type="text" 
        placeholder='your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        />

        <button >signup</button>
      </form>
      <footer>
        <p>already have an account</p>
        <Link to='/login'>login</Link>
      </footer>
    </div>
  )
}

export default Signup
