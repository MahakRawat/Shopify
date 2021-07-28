import React from 'react';
import Header from './header';
import Nav from './components/nav'
import Sidebar from './sidebar'
import {BrowserRouter,Route} from 'react-router-dom'
import Shirtsscreen from './routes/shirtsscreen';
import Pantsscreen from './routes/pantsscreen';
import Sareesscreen from './routes/sareesscreen';
import Suitsscreen from './routes/suitsscreen';
import Productscreen from './routes/productscreen';
import Homescreen from './routes/homescreen';
import Usersscreen from './routes/usersscreen';
import Cart from './routes/cartscreen';
import Signupscreen from './routes/signupscreen';
import Registerscreen from './routes/registerscreen';
import Checkoutscreen from './routes/checkoutscreen';
import Shippingdetailsscreen from './routes/shippingdetailsscreen';
import Paymentscreen from './routes/paymentscreen';
import Placeorderscreen from './routes/placeorderscreen';
import Orders from './routes/orders';

function App() {
 const openMenu=()=>{
   document.querySelector(".sidebar").style.left='0rem'; 
 }
 const closeMenu=()=>{
   document.querySelector("#sidebar").style.left="-20rem";  //works same as script tag in normal html document
}
const searchHandler=(filter)=>{
  //var filter=document.querySelector("#search").nodeValue;

  var i;
const ul=document.querySelector("#sidebar");

const li= ul.querySelectorAll('li');


for(i=0;i<li.length;i++)
{
   
   if(li[i].innerText.indexOf(filter)> -1)
   {
       li[i].style.display="inline";
   }
}
}
 
  return (
    <BrowserRouter>
    <div className="grid-container">
      
        
    <Header searchHandler={searchHandler} />
    <Nav />
  
<main>
<Route path='/cart/:category?' component={Cart}></Route>
<Route path='/' exact={true} component={Homescreen}></Route>
<Route path='/shirts' exact={true} component={Shirtsscreen}></Route>
<Route path='/pants' exact={true} component={Pantsscreen}></Route>
<Route path='/sarees' exact={true} component={Sareesscreen}></Route>
<Route path='/suits' exact={true} component={Suitsscreen}></Route>
<Route path='/product/:category?'  component={Productscreen}></Route>
<Route path='/signIn'  component={Signupscreen}></Route>
<Route path='/userdetails'  component={Usersscreen}></Route>
<Route path='/register'  component={Registerscreen}></Route>
<Route path='/checkout'  component={Checkoutscreen}></Route>
<Route path='/shippingdetails'   component={Shippingdetailsscreen}></Route>
<Route path='/payment'  component={Paymentscreen}></Route>
<Route path='/placeorder'  component={Placeorderscreen}></Route>
<Route path='/orders'  component={Orders}></Route>

</main>
<footer className="footer"> 
  
   <div>Contact us: 7424962449</div>
   <div>all rights reserved.</div>
</footer>
   
</div>
</BrowserRouter>
  );
}

export default App;
