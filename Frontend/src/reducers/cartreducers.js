import {Add_to_Cart,CART_EMPTY,remove_cart_item} from "../constants/cartitemsconstant"


const addtocartreducer=(state={cartitems:[],total:0},action)=>{
  switch(action.type)
  {
      case Add_to_Cart:
         {
             const item=action.payload;
             const exist= state.cartitems.find(x=>(x.category==item.category && x.product==item.product));
             const items=state.cartitems;
             var initialtotal=state.total;
             var cost=0;
            if(exist)
            {
                const newitems =items.map(x =>x===exist?{...x,quantity:item.quantity}:x);
                newitems.forEach((x)=> cost+=x.price*x.quantity);
                return {...state, cartitems: newitems,total:cost};
            }
             return {...state, cartitems:[...items,item],total: initialtotal+item.price*item.quantity};
         }
     case remove_cart_item:
            {
                var cost=0;
                const array=state.cartitems.filter((x)=>{
                 return (x.category!=action.payload.category || x.product!=action.payload.proId);
                })
                array.forEach(x=> cost+=x.price*x.quantity);
                return {...state,cartitems: array,total: cost};
            } 
    case CART_EMPTY:
        {
            return {cartitems:[],total:0};
        }
    default:
         return (state);
  }
}
export {addtocartreducer};