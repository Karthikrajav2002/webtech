import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ul>
        <Link to='about/'>about</Link>
         <Link to='/'>home</Link>
          <Link to='/contact'>contact</Link>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
        <Route path='about/' element={<About/>}></Route>

        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
