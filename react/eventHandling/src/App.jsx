import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'



let App=()=>{
  return(
      <>
      <BrowserRouter>
<nav>
    <h2>event handling</h2>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
    </ul>
</nav>

      <Routes>


        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      

      </Routes>
      
      
      </BrowserRouter>
      
      
      </>


  )
}

export default App