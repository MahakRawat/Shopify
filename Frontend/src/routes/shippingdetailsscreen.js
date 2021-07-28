import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {shippingdetailsactions} from '../actions/shippingdetailsactions';

export default function Shippingdetailsscreen(props) {
    console.log(props.location.search);
    const redirect= props.location.search?(props.location.search.split('&')[1].split('=')[1]):'/checkout';
    const update = props.location.search? (props.location.search.split('&')[0].split('=')[0]=='?update')?true:false:false;
     console.log(redirect);
     console.log(update);
    const [state, setstate] = useState({state:'',address:'',city:'',pincode:''});
    const {userInfo,error}= useSelector(state => state.userInfo);
    const dispatch = useDispatch();
     const SubmitHandler=(e)=>{

         e.preventDefault();

         dispatch(shippingdetailsactions(state.address, state.city, state.state,state.pincode,userInfo.token));

         if(userInfo.shipping_details)
         props.history.push(redirect);
        
     }
     const proceed = ()=>{
        props.history.push(redirect);
     }
    return (
        <div> 
          {
             update||userInfo.shipping_details==null?
          <div className="register">
           <form className="form-2" onSubmit={SubmitHandler}>
               <div>Shipping Details</div>
               <div >
                <label> Address</label>
                <br />
               <input type="text" placeholder='address' className="input" onChange={(e)=>{ setstate({...state, address: e.target.value})}}></input>
                </div>
               <div >
                <label >City</label>
                <br />
               <input type="text" placeholder='city name' className="input" onChange={(e)=>{ setstate({...state, city: e.target.value})}}></input>
                </div>
               <div>
               <label>State</label>
               <br />
               <select onChange={(e)=>{ setstate({...state, state: e.target.value})}}> 
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
               </select>
               </div>
               <div>
               <label > Pin Code</label>
               <br />
               <input type="text" placeholder='Pin Code' className="input" onChange={(e)=>{ setstate({...state, pincode: e.target.value})}}></input>
               </div>
               <div className="button">
               <button type="submit">Submit</button>
               </div>
           </form>
        </div> 
        :
        <div className='shippingdetails'>
           <section>{userInfo.shipping_details} </section>
           <hr />
            <Link to={`/shippingdetails?update=true&redirect=${redirect}`} className='link-s'>Want to update Address?</Link>
            <div >
            <button onClick={proceed}>Continue</button>
            </div>
        </div>
}     
        
       </div>  
    )
}
