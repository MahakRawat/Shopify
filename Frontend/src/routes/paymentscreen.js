import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {paymentaction} from '../actions/shippingdetailsactions';

export default function Paymentscreen(props) {
 const [state, setstate] = useState(false);
 const dispatch = useDispatch();

const SubmitHandler=()=>{
  if(state==false)
  alert('Payment Method not selected');
 else
  {
      dispatch(paymentaction(state));  
     props.history.push('/checkout');
  }
}
    return (
        <div className="Paymentscreen">
           <form className="payment"> 
              <div><b>Payment Methods</b></div>
              <br/>
              <div className="method">
              <input type="radio" value="Gpay" onChange={(e)=>{setstate(e.target.value)}} name="paymentMethod" /><label>GooglePay</label>
              </div>
              <div className="method">
              <input type="radio" value="PhonePay" onChange={(e)=>{setstate(e.target.value)}} name="paymentMethod"/><label>PhonePay</label>
              </div>
              <div className="method">
              <input type="radio" value="DebitCard" onChange={(e)=>{setstate(e.target.value)}} name="paymentMethod"/><label>Debit Card</label>
              </div>
              <div className="method">
              <input type="radio" value="COD" onChange={(e)=>{setstate(e.target.value)}} name="paymentMethod" /><label>Cash On Delivery</label>
              </div>
              <button type="submit" onClick={SubmitHandler}> Continue </button>
           </form>
        </div>
    )
}
