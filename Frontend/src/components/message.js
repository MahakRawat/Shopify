import React from 'react';

 const message=(props)=>{
     return (
       <div className={`alert alert-${props.variant || 'info'}`}>
         {props.children}    
       </div>
     );
 }
 export default message;