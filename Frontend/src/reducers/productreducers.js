import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productconstants";

export const productlistreducer =(state={},actions)=>{ //state is the current state
  switch(actions.type)
  {
      case PRODUCT_LIST_REQUEST:
          return {...state,loading : true};
      case PRODUCT_LIST_SUCCESS:
          return {...state,loading : false, products: actions.payload};
      case PRODUCT_LIST_ERROR:
         return {...state,loading : false, error: actions.payload};
      default:
          return state={products: [],loading: false, error: false};
  }
}
export const productdetailsreducer =(state={},action)=>{
  switch(action.type)
  {
      case PRODUCT_DETAILS_REQUEST:
          return {...state,loading:true,error:false};
     case PRODUCT_DETAILS_SUCCESS:
           return {...state, loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {...state, loading: false, error: action.payload};
            default:
                return {product:{} ,loading: false, error:false};
  }
}