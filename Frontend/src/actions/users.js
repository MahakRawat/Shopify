import Axios from 'axios';
import { user_info_failure, user_info_loading, user_info_success, user_logout,user_register_loading,user_register_success,user_register_failure, user_logout_loading } from '../constants/users';

const signIn =(email,password)=>async (dispatch,getstate)=>{
    dispatch({type: user_info_loading});
  try
  {
   
    const {data}= await Axios.post('/users/login',{email, password});

    if(data)
    {
      dispatch({type: user_info_success, payload: data}) 
       localStorage.setItem('userInfo',JSON.stringify(data));
    }
    else{
        dispatch({type: user_info_failure, payload:'User Not found'});
    }

  }
catch(e){
    dispatch({type: user_info_failure,payload: e.message});
}
}

const register =(email,password,contact_no, user_name)=>async (dispatch,getstate)=>{
  dispatch({type: user_register_loading});
try
{
  const {data}= await Axios.post('/users/signup',{email, password,contact_no,user_name,isAdmin: false,items_in_cart: getstate().addtocart.cartitems,total_cart:getstate().addtocart.total});

    dispatch({type: user_register_success, payload: data});
     localStorage.setItem('userInfo',JSON.stringify(data));

}
catch(e){
  dispatch({type: user_register_failure,payload: e.message});
}
} 


 const logout=()=>(dispatch,getstate)=>{
  dispatch({type: user_logout_loading});
   localStorage.removeItem('userInfo');
   dispatch({type: user_logout, payload:{userInfo:false, loading: false, error: false}});
 }
 export {signIn,logout,register};