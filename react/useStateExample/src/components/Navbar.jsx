import React, { useState } from 'react'

const Navbar = () => {

    // let is_login=true;

    let [state,setstate] = useState(true)
  return (
    <nav>
        <h1>conditional rendering</h1>
        {/* {is_login ? <button>login</button> : <button>logout</button>} */}
        <button onClick={()=>{setstate(!(state))}}>{state ? 'login' : 'logout'}</button>



    </nav>
  )
}

export default Navbar
