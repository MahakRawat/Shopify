import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS } from "../constants/productconstants"
import Axios from 'axios';

const listproducts= (category)=> async (dispatch)=>{
   dispatch({
       type: PRODUCT_LIST_REQUEST
   })
   try{
    const {data}= await Axios.get(`/api${category}`); //middleware request
    dispatch({type: PRODUCT_LIST_SUCCESS, payload:data});
   }
   catch(e){
      dispatch({type: PRODUCT_LIST_ERROR,payload: e.message});
   }
};

const detailsproduct= (productId,category)=> async (dispatch)=>{
    dispatch({
        type: PRODUCT_DETAILS_REQUEST
    })
    try{
     const {data}= await Axios.get(`/api?category=${category}&id=${productId}`); //middleware request
     console.log(data);
     dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data});
    }
    catch(e){
       dispatch({type: PRODUCT_DETAILS_FAIL, payload: e.message});
    }
 };

export  {listproducts,detailsproduct};