import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


export default function Checkout() {
    const {userInfo} = useSelector(state => state.userInfo);
    //const {payment}=useSelector(state=>state.payment);
    //const {delivery}=useSelector(state=>state.delivery);
    const payment= useSelector(state=>state.payment);
    const delivery=false;
    
    return (
        <div>
            <div style={{textAlign:'center'}}><b>CheckOut</b></div>
            <div className="wizard">
                <div className={userInfo? "active":""}><Link to='#' className="link">SignIn</Link></div>
                <div className={userInfo.shipping_details? "active":""}><Link to="/shippingdetails" className="link">Shipping Address</Link></div>
                <div className={payment? "active":""}><Link to="/payment" className="link">Payment Method</Link></div>
                <div className={delivery? "active":""}><Link to="/placeorder" className="link">Place Order</Link></div>
            </div>
        </div>
    );
}

