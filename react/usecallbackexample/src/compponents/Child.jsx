import React from 'react'

const Child = (i) => {
    console.log('im child');
    

  return (
    <div>
      <p>{i.name}</p>
    </div>
  )
}

export default React.memo(Child)
