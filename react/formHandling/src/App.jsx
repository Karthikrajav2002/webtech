import React from 'react'
import Signup from './components/Signup'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import {toast, ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
      <ToastContainer/>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
