import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
     <span className="nav"><Link to="/shirts" style={{color:'white'} } className="link">shirts</Link></span>
     <span className="nav"><Link to="/pants" style={{color:'white'}} className="link">pants</Link></span>
     <span className="nav"><Link to="/sarees" style={{color:'white'}} className="link">sarees</Link></span>
     <span className="nav"><Link to="/suits" style={{color:'white'}} className="link">suits</Link></span>
        </nav>
    )
}
