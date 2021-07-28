import axios from "axios";
import {shippingdetails_failure,shippingdetails_success,payment_method} from '../constants/users';

const shippingdetailsactions= (address,city,state,pincode,token)=>async (dispatch)=>{
    const details= address+" "+city+" "+state+" "+pincode;
  try{
    const {data}= await axios.patch('/users',{shipping_details: details ,token});
    dispatch({type:shippingdetails_success, payload: data});
    localStorage.setItem('userInfo',JSON.stringify(data));
  }
   catch(e){
       dispatch({type: shippingdetails_failure, payload: e.message});
   } 

}
const paymentaction= (paymethod)=>async (dispatch)=>{
dispatch({type:payment_method, payload: paymethod});
}
export {shippingdetailsactions, paymentaction};