import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderactions';
import {emptyCart} from '../actions/cartActions';
import {Loadingbox} from '../components/loading';
import MessageBox from '../components/message';

export default function Placeorderscreen(props) {
    
  const cart = useSelector((state) => state.addtocart);
  const {userInfo,error,loading,update} = useSelector((state) => state.userInfo);
  
  const paymentMethod =useSelector(state=>state.payment);
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  
  
  const shippingPrice = cart.total > 1000 ? 0 : 100;
  const taxPrice = toPrice(0.05 * cart.total);
  const totalPrice = cart.total + shippingPrice + taxPrice;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {

    dispatch(createOrder({cartitems:cart.cartitems , totalPrice}));

  };
  useEffect(()=>{
    if (update) {
      alert('your order has been placed!')
      dispatch(emptyCart());
      props.history.push('/orders');  
    }
  })
  return (
     <div className="placeorder">
        <div className="col_1">
            <div>
             <div className="card card-body">
                <h2>Shipping</h2>
                <br/>
                  <div><strong>Name:</strong> {userInfo.user_name} </div>
                 <div><strong>Address: </strong> {userInfo.shipping_details}</div>
                 <div><strong>Contact No.:</strong> {userInfo.contact_no}</div>
                 <div><strong>Email:</strong> {userInfo.email}</div>
              </div>
            </div>
              

        
              <div className="card card-body">
                <h2>Payment</h2>
                <br/>
                 <div> <strong>Method:</strong> {paymentMethod}</div>
          
              </div>
          

            <div>
              <div className="card card-body">
                <h2>Order Items</h2>
                <div>
                  {cart.cartitems.map((item) => (
                    
                      <div className="order">
                        <div>
                          <img
                            src={item.image}
                  
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.category}?id=${item._id}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.quantity} x ${item.price} = ${item.quantity * item.price}
                        </div>
                      </div>
                
                  ))}
                </div>
              </div>
            </div>
          </div>
        <div className="col_2">
          <div className="card card-body">
        
                <h2>Order Summary</h2>
              
              
                <div>
                  <div>Items
                  ${cart.total.toFixed(2)}</div>
                </div>
          
          
                <div >
                  <div>Shipping
                    ${shippingPrice.toFixed(2)}</div>
                  </div>
              
              
                <div>
                  <div>Tax
                ${taxPrice.toFixed(2)}</div>
                </div>
            
              
                <div>
                  <div>
                    <strong> Order Total</strong>
                
        
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
            
            
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartitems.length === 0}
                 >
                  Place Order
                </button>
            
              {loading && <Loadingbox></Loadingbox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}

          </div>
        </div>
      </div>
  );
}

