import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../actions/users';
import {Link} from 'react-router-dom';
import { Loggingoutbox } from '../components/loading';

export default function Usersscreen(props) {
  const {userInfo,loading} = useSelector(state => state.userInfo);
  console.log(userInfo);
  const dispatch = useDispatch();
  const logoutHandler=()=>{
      dispatch(logout());
  }
  useEffect(()=>{
      if(!userInfo)
      {
         
          props.history.push('/signIn');
          window.location.reload(false);
      }
  })
    return(
      <div>
      {
          loading?
           (<Loggingoutbox />)
          :
          <div className="userdetailsscreen">
     <div className="userdetails">
            <h3> Profile Details</h3>
            <hr/>
            <div className="user-container">
            <div className='item'><strong>User Name</strong>: {userInfo.user_name}</div>
            <div  className='item'><strong>Email</strong>: {userInfo.email}</div>
            <div  className='item'><strong>Contact No.</strong>: {userInfo.contact_no}</div>
            <button> edit</button>
            <div  className='item'><strong>Shipping Details</strong>: {userInfo.shipping_details}</div>
            <button onClick={()=>{props.history.push('/shippingdetails?update=true&redirect=/userdetails')}}>edit</button>
            <div  className='item' id='orders'><Link to="/orders">Orders/Returns</Link></div>
            </div>
            <button onClick={logoutHandler} id="logout"> logout</button>
    </div>
    </div>
      }
     </div>
    );
   
}
