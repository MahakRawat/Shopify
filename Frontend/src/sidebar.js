import React from 'react';
import { Link } from 'react-router-dom';
 const sidebar=(props)=>{
     return(
        <aside className="sidebar">
<h5>Shopping Categories</h5>
<button onClick={props.close}>X</button>
<div >
<ul >
<li><Link to="/shirts">shirts</Link></li>
<li><Link to="/pants">pants</Link></li>
<li><Link to="/sarees">sarees</Link></li>
<li><Link to="/suits">suits</Link></li>
</ul>
</div>
</aside> 
     );
 }
 export default sidebar;