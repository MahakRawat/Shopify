import React from 'react';
import {Link} from 'react-router-dom'
const product=(props)=>{
    return (
        <div className="product">
        <img src={props.image}></img>
        <div className="product-details">
        <div><Link to={`product/${props.category}?id=${props._id}`}>{props.name}</Link></div>
        <div>{props.brand}</div>
        <div className="price">${props.price}</div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star-half-o checked" aria-hidden="true"></span>
        <div>ratings { props.rating} star</div>
        </div>
        </div>
    );
}
export default product;