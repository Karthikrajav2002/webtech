import React from 'react'
import Counter from './component/counter'
import Todo from './component/Todo'
import {toast, ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <div>
      <Counter/>
      <Todo/>
      <ToastContainer/>
    </div>
  )
}

export default App
