import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Orders() {
    const {userInfo}= useSelector(state=>state.userInfo);
    const {orders}=userInfo;

    return (
        <div className="ordersScreen">
           {
               orders.map((order)=>
                   (
                       <div className="orders">
                           {
                               order.items.map((item)=>
                                  (
                                    <div>
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
                           {' '}<button className="cancel">cancel</button>
                        </div>
                        </div> 
                        <hr/>
                        </div> 
                                  )
                               )
                           }
                           <div><b> Total Price:</b> ${order.totalPrice} (including shipping & taxes)</div>
                           <div><b>State:</b> {order.state}</div>
                       </div>
                   )
               )
           } 
        </div>
    )
}
