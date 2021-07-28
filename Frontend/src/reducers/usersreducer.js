import { user_info_failure, user_info_loading, user_info_success,user_logout_loading,user_logout, user_info_update_loading ,user_register_failure,user_register_success,user_register_loading, shippingdetails_success, shippingdetails_failure, user_info_update_failure, user_info_update_success} from "../constants/users"

const userInfo =(state={userInfo: false ,loading: false, error: false,update: false}, actions)=>{

  switch(actions.type)
  {
      case user_info_loading:
          {
               return {...state, loading: true,error: false};
          }
      case user_info_success:
          {
              return {...state, loading: false , error: false , userInfo: actions.payload};
          }
      case user_info_failure:
          {
               return {...state, loading: false, error: actions.payload}
          }
      case user_logout_loading:
          {
              return {...state ,loading: true, error: false};
          }
      case user_logout:
          {
              return actions.payload;
          }
          case user_register_loading:
            {
                 return {...state, loading: true,error: false};
            }
        case user_register_success:
            {
                return {...state, loading: false , error: false , userInfo: actions.payload};
            }
        case user_register_failure:
            {
                 return {...state, loading: false, error: actions.payload};
            }
        case user_info_update_failure:
            {
                return  {...state, error:actions.payload, loading: false, update: false};
            }
        case user_info_update_success:
            {
                return {...state,loading: false, userInfo: actions.payload,update: true};
            }
       case user_info_update_loading:
            {
                return  {...state, loading: true,update: false};
            }
        case shippingdetails_success:
            {
                return {...state,loading: false, userInfo: actions.payload,update: true};
            }
        case shippingdetails_failure:
            {
                return {...state, error:actions.payload,update: false};
            }
          default:
              return {...state,update: false};
  }
}



export {userInfo};