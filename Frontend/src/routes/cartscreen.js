import React, { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart,removeItemFromCart} from '../actions/cartActions';

export default function Cartscreen(props) {
    const category=props.match.params.category;
    const strproId=props.location.search? (props.location.search.split('&')[0]):'';
    const strqty=props.location.search? (props.location.search.split('&')[1]):'';
     const proId=strproId!==''? strproId.split('=')[1]:'';
     const qty= strqty!=='' ? Number(strqty.split('=')[1]):1;
    const dispatch =useDispatch();
    const items = useSelector(state => state.addtocart);
    
    const checkout= ()=>{
        props.history.push('/checkout');
    }
    useEffect(()=>{
        if(proId)
         dispatch(addToCart(category,proId,qty));
       
    },[])
    
    return (
        <div>
           
            <div className="heading"><b>Your Shopping Cart</b></div>
            {
                items.cartitems.length>0?
                <div className="cartscreen">
                <div className="cart-items">
               {
                items.cartitems.map((item)=>{
                  return (
                
                      <div className="cartItem">
                      <span><img src={item.image} className="cartImage" /></span>
                      <span><Link to={`/product/${item.category}?id=${item.product}`} className='link'>{item.name}</Link></span>
                      <span>price :${item.price}</span>
                      <span>quantity: {item.quantity}</span>
                      <span><button onClick={()=>{dispatch(removeItemFromCart(item.category,item.product))}}>remove</button></span>
                      </div>
                    
                  );
                  })
                }
                </div>
    
                <div className="checkout">
                <div id="total">Total :${items.total} </div>
                <div>
                <button className="proceed" onClick={checkout}> Proceed to checkout </button>
                </div>
                </div>
                
            </div>
            : <div className="empty"> Your cart is empty.<Link to="/"> Go Shopping </Link></div>
            }
         
        </div>
    );
}
