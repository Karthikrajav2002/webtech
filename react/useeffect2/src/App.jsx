import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Products from './components/Products'
import Users from './components/Users'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav><h1>useeffect</h1>
      <ol><li>
        <Link to={'/users'}>users</Link>
        </li>
        <li><Link to={'/'}>products</Link></li></ol></nav>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
