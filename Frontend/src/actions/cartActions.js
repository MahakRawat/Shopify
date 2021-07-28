
import Axios from "axios";
import {Add_to_Cart,remove_cart_item,CART_EMPTY} from '../constants/cartitemsconstant';
import { user_info_update_success,user_info_update_failure } from "../constants/users";

const addToCart=(category,productId,qty)=>async(dispatch,getstate)=>{
     const {data}= await Axios.get(`/api?category=${category}&id=${productId}`);
  dispatch({type:Add_to_Cart,
  payload:{
    name:data.name,
    image:data.image,
    price:data.price,
    quantity:qty,
    category: data.category,
    product:data._id
}});
  
if(getstate().userInfo.userInfo)
{
   try{  
     const {data}= await Axios.patch('/users',{items_in_cart:getstate().addtocart.cartitems, total_cart:getstate().addtocart.total, token:getstate().userInfo.userInfo.token });
     dispatch({type:user_info_update_success, payload: data});
   }
   catch(e)
   {
     dispatch({type: user_info_update_failure, payload: e.message});
   }
}
else
{
  localStorage.setItem('cartitems',JSON.stringify(getstate().addtocart.cartitems));
  localStorage.setItem('total',JSON.stringify(getstate().addtocart.total));
}

}
const removeItemFromCart=(category,proId)=>async(dispatch,getstate)=>{

  dispatch({type: remove_cart_item, payload: {proId,category}});

if(getstate().userInfo.userInfo)
{
  try{
      
    const {data} = await Axios.patch('/users',{items_in_cart:getstate().addtocart.cartitems,total_cart: getstate().addtocart.total ,token: getstate().userInfo.userInfo.token});

     dispatch({type:user_info_update_success, payload: data});

  }
  catch(e)
  {
    dispatch({type: user_info_update_failure});
  }
}
  
  else
  {
    localStorage.setItem('cartitems',JSON.stringify(getstate().addtocart.cartitems));
    localStorage.setItem('total',JSON.stringify(getstate().addtocart.total));
  }
  
}
const emptyCart =()=>(dispatch)=>{
  dispatch({ type: CART_EMPTY });
        
  if(localStorage.getItem('cartitems')){localStorage.removeItem('cartitems')};
  if(localStorage.getItem('total')){ localStorage.removeItem('total')};
}
export  {addToCart,removeItemFromCart,emptyCart};