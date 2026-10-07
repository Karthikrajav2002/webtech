import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Todo = () => {
    let [items,setitems]=useState([])
    let [item,setitem]=useState("")
    let [editindex,seteditindex]=useState(null)

    let handlesubmit=()=>{

      item=item.trim()

      if (items.includes(item)) {
        return toast.error("item already exists")
        
      }
      if(item===""){
        return alert.warn("please enter a valid item")
      }

      if (editindex!==null){
        setitems([...items,item])
      }

    else{
      let newitems=[...items]
      newitems[editindex]=item;
      setitems(newitems)
      seteditindex(null)

      setitem("")
    }
    }

    let handledelete=({index})=>{
      let newitems=items.filter((ele,ind)=>{
        return ind!==index
      })
      setitems(newitems)
    }

    let handleedit=({index})=>{
      setitem(items[index])
      seteditindex(index)
    }



  return (
    <div className='todo'>
        <h1>todo app</h1>
        <header>
            <input type="text" placeholder="Add a new todo..." value={item} onChange={(e) => setitem(e.target.value)} />
            <button onClick={()=>handlesubmit()}> {editindex==null ? "Add" : "Update"}</button>
        </header>
        <main>
          {
            items.length > 0 ? 
            items.map((ele,index)=>{
              return <li key={index}>{ele}
              <button onClick={()=>handleedit({index})}>edit</button>
              <button onClick={()=>handledelete({index})}>delete</button>
              </li>
            
          }) : <p>No items added yet</p>}
        </main>
      
    </div>
  )
}

export default Todo
