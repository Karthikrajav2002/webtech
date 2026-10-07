import React, { useEffect, useState } from 'react'

const Products = () => {
    let [items,setItems]=useState([])

    // pagination

    let [currentPage,setCurrentpage]=useState(1)

    const perPageData=5

    const lastPage=Math.ceil(items.length / perPageData)

    const endIndex=currentPage*perPageData

    const startIndex=endIndex-perPageData

    const currentItems=items.slice(startIndex,endIndex)



    let fetchData=async()=>{
        try{
            let res=await fetch('https://dummyjson.com/products')
            let data=await res.json()
            console.log(data)
            console.log(data.products)

            setItems(data.products)

        }
        catch(err){
            console.log(err);

        }
      
    }
      useEffect(()=>{
        fetchData()
        },[]
    )
  return (
    <>
    <div className='container'>
      { items.length > 0 ?
        currentItems.map((item)=>{

            return <div key={item.id} className='productcard'>
                <img src={item.images[0]} alt="" />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.ratings}</p>
               

            </div>
        }) : <h1>no data found</h1>}
    </div>
    <footer>
        <button onClick={()=>setCurrentpage(currentPage-1)} disabled={currentPage==1}>pre</button>
        <span>{currentPage}/{lastPage}</span>
        <button onClick={()=>setCurrentpage(currentPage+1)} disabled={currentPage==lastPage}>next</button>
    </footer>
    </>
  )
}

export default Products
