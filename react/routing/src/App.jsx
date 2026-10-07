import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Service from './components/service'
import Notfound from './components/Notfound'

function App(){
  return(
   
   <div>
    <BrowserRouter>
    <nav>
      <h2>
        routing example
      </h2>

      <ul>
        <Link to='/'>home</Link>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </ul>
    </nav>
    
      <Routes>

        <Route path='/' element={<Home/>} >        </Route>
        <Route path='/about' element={<About/>
        } >        </Route>
        <Route path='/contact' element={<Contact/>} >        </Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='*' element={<Notfound/>} >        </Route>
      </Routes>
    </BrowserRouter>


   </div>
  )
}

export default App