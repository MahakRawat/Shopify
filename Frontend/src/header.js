import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {makeNode,add,search_prefix} from './trie.js';

const Header=()=>{
    const path= window.location.pathname;
    console.log(path);
    const cart = useSelector(state => state.addtocart);
    const {userInfo} =useSelector(state=> state.userInfo);
    const name= userInfo.user_name;
    const {cartitems}= cart;
   
    const [search, setsearch]=useState('');
    const arr= new Map([
        ['shirts','/shirts'],
        ['slim shirts','/shirts?tag=SlimShirts'],
        ['formal shirts','/shirts?tag=FormalShirts'],
        ['denim shirts','/shirts?tag=Denim Shirts'],
        ['saree','/sarees'],
        ['silk saree','/sarees?tag=SilkSaree'],
        ['cotton saree','/sarees?tag=CottonSaree'],
        ['bandhani saree','/sarees?tag=BandhniSaree'],
        ['suits','/suits'],
        ['anarkali suit','/suits?tag=AnarkaliSuit'],
        ['patyala suit','/suits?tag=PtayalaSuit'],
        ['straight suit','/suits?tag=StraightSuit'],
        ['pants','/pants'],
        ['trouser pants','/pants?tag=trouser'],
        ['jeans pants','/pants?tag=jeans'],
        ['formal pants','/pants?tag=formal'],
    ]);
    const items = [
        'shirts',
        'slim shirts',
        'formal shirts',
        'denim shirts',
        'saree',
        'silk saree',
       'cotton saree',
       'bandhani saree',
        'suits',
        'anarkali suit',
        'patyala suit',
        'straight suit',
        'pants',
        'trouser pants',
        'jeans pants',
        'formal pants',
       ];

const root = new makeNode('\0');

for (const item of items)
    {
        add(item, 0, root);
    }

    var SearchItems;
    if(search!='')
    {
        var modSearch= search.toLowerCase();
         
    const words= search_prefix(modSearch,0,root);
      if(words)
       {
            SearchItems=(words.map((x)=>{
                console.log(arr.get(x))
               return (<div className="searchitem"><Link to={arr.get(x)} className="link">{x}</Link></div>);
           }))
       }
    }
    
    return(
        <header className="header" >
          <div className="brand"> 
            
            <Link to='/'>Shopify</Link> 
          </div>
          <div className="searchBox">
              
              <input id="search" type="text" placeholder="Type to search" autocomplete="off" onKeyUp={(e)=>setsearch(e.target.value)}></input>
              <div id="search-container">
              {SearchItems}
              </div>
              
         </div>
        <div className="headerlinks" >  
         <Link to="/cart"><i className="fa fa-shopping-cart fa-2x"></i>{ cartitems.length>0 && (<span className="badge">{cartitems.length}</span> )}</Link>   
         {
             userInfo? 
             <Link to="/userdetails" id="user_name">Hello,{name}</Link>
             :
             <Link to="/signIn"><i className="fa fa-user-circle fa-2x"></i></Link> 
         }
         </div>
     </header>
    
    );
}
export default Header;