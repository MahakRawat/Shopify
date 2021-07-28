import React from 'react';

 const Loadingbox=()=>{
     return (
       <div>
         <i className="fa fa-spinner fa-spin"></i>loading...   
       </div>
     );
 }
 const Loggingoutbox=()=>{
  return (
    <div>
      <i className="fa fa-spinner fa-spin"></i>logging out...   
    </div>
  );
}
 export {Loadingbox,Loggingoutbox};