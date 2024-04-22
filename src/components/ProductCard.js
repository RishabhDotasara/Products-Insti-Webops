import React, { useState } from 'react'

export default function ProductCard(props) {
    const [active,setActive] = useState(-1);

  return (
    <div className='product-card'>
        <span className="discount" >-{props.discount} %</span>
        <div className="thumbnail">
            <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className="info">
            <h3 className="title">{props.title}</h3>
            <div className="price">Price: ${props.price} <span style={{color:'grey'}}>Brand: {props.brand}</span></div>
        </div>
        <button className='view-btn' onClick={()=>{
            props.setactive(props.indx);
        }}>View</button>
    </div>
  )
}
