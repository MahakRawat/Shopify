import React ,{useState,useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {register} from '../actions/users';
import {Loadingbox} from '../components/loading';
import Message from '../components/message';


export default function Signupscreen(props) {

    const dispatch = useDispatch();
     const [state, setstate] = useState({email:'',password:'',contact:0 ,user_name:'',confirm:''});
      const {userInfo,loading,error} = useSelector(state => state.userInfo);
   const  SubmitHandler= (e)=>{
      if(state.password!=state.confirm)
       alert('Password does not match');
      e.preventDefault();
      dispatch(register(state.email,state.password,state.contact,state.user_name)); 
   }
   useEffect(() => {
     if(userInfo)
       props.history.push('/userdetails');
   },[props.history, userInfo]);

    return (
        <div>
        {loading && <Loadingbox></Loadingbox>}
        {error && <Message variant="danger">{error}</Message>}
         
           <div className="register">
           <form className="form-2" onSubmit={SubmitHandler}>
               <div >
                <label htmlFor="user_name"> User name</label>
                <br />
               <input type="text" placeholder='user_name' className="input" onChange={(e)=>{ setstate({...state, user_name: e.target.value})}}></input>
                </div>
               <div >
                <label htmlFor="email"> Email address</label>
                <br />
               <input type="email" placeholder='abc123@gmail.com' className="input" onChange={(e)=>{ setstate({...state, email: e.target.value})}}></input>
                </div>
               <div>
               <label htmlFor=" password"> Password</label>
               <br />
               <input type="password" placeholder='Password' className="input" onChange={(e)=>{ setstate({...state, password: e.target.value})}}></input>
               </div>
               <div>
               <label htmlFor=" password"> Confirm Password</label>
               <br />
               <input type="password" placeholder=' Confirm Password' className="input" onChange={(e)=>{ setstate({...state, confirm: e.target.value})}}></input>
               </div>
               <div >
                <label htmlFor="contact_no"> contact Number</label>
                <br />
               <input type="tel" placeholder='XXXXXXXXXX' className="input" onChange={(e)=>{ setstate({...state, contact: e.target.value})}}></input>
                </div>
               <div className="button">
               <button>Register</button>
               </div>
           </form>
        </div> 
             
         </div>
         
    )  
}
