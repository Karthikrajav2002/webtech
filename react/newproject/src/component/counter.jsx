import React from 'react'
import Hello from './Hello'

const Counter = () => {
    let [count,setCount]=React.useState(0)
    let decrease=()=>{
      setCount((pre)=>{
        return pre-1
      })
      setCount((pre)=>{
        return pre-1
      })
      // setCount(count-1)
      // setCount(count-1)

    }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={decrease}>decrease</button>
      <Hello/>
    </div>
  )
}

export default Counter
