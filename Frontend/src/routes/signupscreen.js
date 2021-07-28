import React ,{useState,useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {signIn} from '../actions/users';
import {Loadingbox} from '../components/loading';
import Message from '../components/message';


export default function Signupscreen(props) {

    const dispatch = useDispatch();
     const [state, setstate] = useState({email:'',password:''});
      const {userInfo,loading,error} = useSelector(state => state.userInfo);
   const  SubmitHandler= (e)=>{
      e.preventDefault();
      dispatch(signIn(state.email,state.password)); 
   }
   useEffect(() => {
     if(userInfo)
     {
        
        props.history.push('/userdetails');  
        window.location.reload(false);
     }
       
   },[props.history, userInfo]);

    return (
        <div>
        {loading && <Loadingbox></Loadingbox>}
        {error && <Message variant="danger">{error} <p> New costumer? <Link to='#'> Create Account</Link></p> </Message>}
         
           <div className="signin">
           <form className="form" onSubmit={SubmitHandler}>
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
               <div className="button">
               <button>Sign In</button>
               </div>
               <div> New costumer? <Link to='/register'> Create Account.</Link></div>
           </form>
        </div> 
             
         </div>
         
    )  
}
