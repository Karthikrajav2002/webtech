
import React from 'react'
import { useState } from 'react';

const Counter = () => {
    let num=0;
    let increase=
    ()=>{
        num=num+1
    }
    let [count,setCount]=useState(0)

    let increment=()=>{
        setCount(count+1)
    }

    let decrease=()=>{
        setCount(count-1)

    }

    let reset=()=>{
        setCount(0)

    }

    let [name,setName]=useState('raja')

    let changename=()=>{
        setName('karthik')
    }
  return (
    <div>
        <h1>num is: {num}</h1>
        <h2>count is:{count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
      <h1>name is:{name}</h1>
      <button onClick={changename}>change name</button>
    </div>
  )
}

export default Counter
