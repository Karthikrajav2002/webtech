import React, { useEffect, useState } from 'react'

const Home = () => {
    let[item,setitem]=useState([])
    let [search,setsearch]=useState('')

    let fetchdata=async ()=>{
        try{
        let res=await fetch('https://fakestoreapi.com/products')
        let data=await res.json()
        console.log(data);
        setitem(data)
    }
        catch(err){
            console.log(err);
            
        }  
    }
    useEffect(()=>{
        fetchdata();
    },[])
    let filteredproducts=item.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='homepage'>
      <header>
        <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} />

      </header>
      <main>
        {
            filteredproducts.length>0 ? filteredproducts.map((ele)=>{

                return <li key={ele.id}>
                    <p>{ele.title}</p>
                    {/* <img src="{ele.img}" alt="" />
                    <p>{ele.price}</p> */}
                </li>}) : <h1>no data found</h1>
        }

      </main>
    </div>
  )
}

export default Home
