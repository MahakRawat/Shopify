
import {createStore, compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productlistreducer, productdetailsreducer } from './reducers/productreducers.js';
import {addtocartreducer }from './reducers/cartreducers'; 
import {userInfo} from './reducers/usersreducer';
import {paymentreducer} from './reducers/paymentreducer';


const reducer = combineReducers({
  productlist: productlistreducer,
  productdetails: productdetailsreducer,
  addtocart:addtocartreducer,
  userInfo: userInfo,
  payment: paymentreducer,

})
const initialstate = {
  userInfo:{
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):false,
    loading: false,
    error: false,
    update: false
  },
  addtocart:{
    cartitems: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).items_in_cart:localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems')):[],
    total:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).total_cart:localStorage.getItem('total')?JSON.parse(localStorage.getItem('total')):0, //for maintaining the cart even on refresh 
  }
   
} 
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer,initialstate,composeEnhancer(applyMiddleware(thunk))); 

export default store;