import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'


const Login = () => {
  let navigate=useNavigate()
            let [email,setEmail]=useState('')
            let [password,setPassword]=useState('')
        let handleSubmit=(e)=>{
            e.preventDefault()
            console.log('form is submitted')

            if(!email || !password){
                toast.error('please fill all the fields')
                return;
            }

            let user=JSON.parse(localStorage.getItem('user'))
            if(user.email !== email || user.password !== password){
                toast.error('invalid credentials')
                return;
            }

            toast.success('login successful')
            navigate('/home')
            setEmail('')
            setPassword('') 
        }
  return (
    <div className='login'>
      <h1>login page</h1>
       <form action="" onSubmit={handleSubmit}>
      

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

        <button >login</button>
      </form>
      <footer>
        <p>don't have an account</p>
        <Link to='/'>signup</Link>
      </footer>
    </div>
  )
}

export default Login
