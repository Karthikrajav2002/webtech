// import React from 'react'

const Card=(props)=>{

    let {title,price,rating,link,id}=props
    return(
        <div className="productCard" key={id}>
              <img src={link} alt="" />
              <h2>{title}</h2>
              <h3>{price}</h3>
              <h4>{rating}</h4>
            </div>
    )
}

export default Card