import React, { useRef ,useState} from 'react'

const Home = () => {
    let a=20
    let b=useRef(20)

    let increase=()=>{
        console.log(a++);
        console.log(b.current++)
        
    }
    let [dark,setdark]=useState(true)

    let j1=useRef()

    let colorChange=function(){
        console.log(j1);
        console.log(j1.current);
        j1.current.style.color='red'
        
        
    }
  return (
    <div className='dark'>
        <header>
      <h1>this is home page</h1>
      <button onClick={increase}>inc</button>
      <button onClick={()=>{setdark((pre)=>!pre)}}>{dark ? 'light':'dark'}</button>

        </header>

      <main>
        <h1 ref={j1}>use ref hook example</h1>
    <button onClick={colorChange}>change color</button>
      </main>


    </div>
  )
}

export default Home
