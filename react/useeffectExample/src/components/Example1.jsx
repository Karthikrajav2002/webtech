import React, { useEffect ,useState} from 'react'

const Example1 = () => {

    let [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('im useeffect 1')
    })

    useEffect(()=>{
        console.log('im useeffect 2 with dependency array which is empty')
    },[])

    let [isdark,setdark]=useState(true)

    useEffect(()=>{
        let num =0;
        let timer= setInterval(()=>{
            console.log(num++)
        },1000)
        return()=>{
            clearInterval(timer)
            console.log('its done')
        }
    })
    return (
    <div>
        <h1>useEffect Example {count}</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setdark(!isdark)}>{isdark ? 'light':'dark'}</button>
        
    </div>
    )
}

export default Example1
