import React, { useEffect, useState } from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Message from '../components/message';
import {detailsproduct} from '../actions/productactions.js';
import {Loadingbox} from '../components/loading';


const Productscreen=(props)=>{ 
    const proId=props.location.search.split('=')[1];
    const category=props.match.params.category;
    const dispatch = useDispatch();
    const productdetails =useSelector(state => state.productdetails);

     const {product,loading,error}= productdetails;
     const [qty,setqty]= useState(1);

     const addToCartHandler=()=>{
       props.history.push(`/cart/${category}?proId=${proId}&qty=${qty}`);
     }
     useEffect(()=>{
         dispatch(detailsproduct(proId,category));
     },[dispatch,proId,category]);
     /*addItemstoCart=(event)=>{
        var qty=items.qty + event.target.value;
        
        additems({...items,things:[...things,]})
     }*/
    return (
      <div>
    {loading?<Loadingbox > </Loadingbox>
        : error? <Message variant="Danger">{error}</Message>
        :<div> 
        <Link to={`/${product.category}`} className="screenname">back to results</Link>
          <div className=" product-container">
         <div className="zoom-within-container">   
     <img src={product.image} className="detail-image"></img>
         </div>
      <div className="product-description">
         <div><b>{product.name}</b></div>
         <div>brand: {product.brand}</div>
         <div>ratings: {product.rating} (reviews: {product.reviews})</div>
         <div className="price">price: ${product.price}</div>
         <div>description: {product.description}</div>
      </div>
      <div className="cart">
        <div>price: ${product.price}</div>
        {
          product.state==='InStock'?
          (
           <div> 
          <div>state: {product.state}</div>
            <div>
             Qty: <select onChange={e=>setqty(e.target.value)}>
             {[...Array(product.quantity).keys()].map((x)=>{
                 return <option key={x+1} value={x+1}>{x+1}</option>
             })}
            </select>
        </div >
        <div  className="addtocart" onClick={addToCartHandler}>
           <button>Add to cart</button>
        </div>
        </div>)
          :(<div> state: Out of Stock</div>)
          }
        </div>
        </div>
        </div>
        }
    </div>
    );
}
export default Productscreen;