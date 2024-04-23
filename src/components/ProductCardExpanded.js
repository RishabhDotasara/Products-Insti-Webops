import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function ProductCardExpanded(props) {

  const [active,setActive] = useState(props.product.thumbnail);
  return (
    <div className="expanded-product-card-container">
      <div className="expanded-product-card">
        <span className="cross" onClick={()=>{props.setactive(-1)}}><RxCross1/></span>
            <div className="images">
              <img src={active} alt="" className="main" />
              <div className="slides">
                
                {props.product.images.map((image)=>{
                  return(

                    <img src={image} alt="Image" className="slide" onClick={(e)=>{setActive(e.target.src)}}/>
                  )
                })}
                 
                 
                
              </div>
            </div>
            <div className="info">
              <h1 className="title">{props.product.title}</h1>
              <div className="details">
                <div className="brand"><span style={{fontWeight:500}}>Brand</span>: {props.product.brand}</div>
                <div className="category"><span style={{fontWeight:500}}>Category</span>: {props.product.category}</div>
                <div className="price"><span style={{fontWeight:500}}>Price</span>: ${props.product.price}</div>
                <div className="Discount"><span style={{fontWeight:500}}>Discount</span>: <span style={{color:'green'}}>-{props.product.discountPercentage}% off</span></div>
                <div className="rating"><span style={{fontWeight:500}}>Rating</span>: {props.product.rating} / 5</div>

              </div>
              <div className="actions">
                <button className="btn">Buy Now</button>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
      </div>
    </div>
  );
}
