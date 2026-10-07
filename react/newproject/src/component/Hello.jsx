import React from 'react'

const Hello = () => {
  console.log('i am hello component who is the child of app component')
  return (
    <div>
      <h1>hello component</h1>
    </div>
  )
}

export default React.memo(Hello)
