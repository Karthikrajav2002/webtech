import React from 'react'
import { useState } from 'react'

const Home = () => {
    let [isdark,setisdark]= useState(true)
    let user=['raja','ragu','bala','isham']

  return (
    <div className={isdark ? 'dark':'light'}>
      <h1>this is home component</h1>

      

        <button onClick={()=>setisdark(!isdark)}>{isdark ? 'light':'dark'}</button>


        <ol>
            {
                user.map((user,index)=>{
                    return <li key={index}>{user}</li>
                })
            }

        </ol>






    </div>
  )
}

export default Home
