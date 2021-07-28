import {payment_method} from '../constants/users';

const paymentreducer=(state=false,action)=>{
   switch(action.type)
   {
       case payment_method:
           {
               return action.payload;
           }
       default:
           {
               return state; 
           }
   } 
}
export {paymentreducer};