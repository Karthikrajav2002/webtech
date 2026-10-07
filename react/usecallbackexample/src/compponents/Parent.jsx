import React, { useCallback } from 'react'
import Child from './Child'
import { useState } from 'react'


const Parent = () => {
    let [count,setcount]=useState(1000)
    useCallback(function exam(){

        console.log('hi');
        
    },[])
  return (
    <div>
      <h1>tis is parent component</h1>
      <h1>count  : {count}</h1>
      <button onClick={()=>setcount(count-1)}>dec</button>
      <Child name={'raja'} func={exam}/>
    </div>
  )
}

export default Parent
