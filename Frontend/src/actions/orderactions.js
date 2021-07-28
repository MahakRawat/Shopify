
import {CART_EMPTY} from '../constants/cartitemsconstant';
import Axios from 'axios';
import { user_info_update_failure, user_info_update_success,user_info_update_loading } from '../constants/users';


export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({type: user_info_update_loading});
    try {
      const user = getState().userInfo;
      const {token}= user.userInfo;

      const neworder= {items: order.cartitems, totalPrice: order.totalPrice , state: "Processing"}; 

      const { data} = await Axios.patch('/users', {orders: neworder ,token:token});

       console.log(data);

      dispatch({ type: user_info_update_success, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
 

    } catch (error) {
      dispatch({
        type: user_info_update_failure,
        payload: error.message,
      });
    }
  };