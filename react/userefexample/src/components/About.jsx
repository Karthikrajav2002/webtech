import React, { useRef } from 'react'

const About = () => {
    let play=useRef()
    let pause=useRef()

    let playvdo=()=>{
        
    }
  return (
    <div className='about'>

      <h1>this is about page</h1>
      <div className='left'>
        <h1>video play and pause</h1>
      </div>
      <div className='right'>
        <video src="" ></video>
        <div>
            <button ref={play} onClick={playvdo}>play</button>
            <button ref={pause} onClick={pausevdo}>pause</button>
        </div>
      </div>
    </div>
  )
}

export default About
