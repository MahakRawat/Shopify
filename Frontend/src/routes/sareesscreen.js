import React, { useEffect} from 'react';
import Product from '../product';
import {useSelector,useDispatch} from 'react-redux';
import {Loadingbox} from '../components/loading';
import Message from '../components/message';
import {listproducts} from '../actions/productactions.js';

const Sareesscreen=()=>{
        const category= window.location.pathname;
       const dispatch = useDispatch();
      const productlist= useSelector(state => state.productlist);
      
      const {loading , error,products}= productlist;
    /*const [products,setproducts]=useState([]);
    const [loading,setloading]= useState(false);
    const [error,seterror]=useState(false);*/
    
    useEffect(()=>{
        dispatch(listproducts(category));
        // const  fetchdata= async()=>{
        // try{
        //     setloading(true);
           
        //         const {data}= await axios.get('/api/products');
        //         setloading(false);
        //         setproducts(data);
        }
    //     catch(e){
            
    //         setloading(false);
    //         seterror(e.message);
            
    //     }
    // }
    // fetchdata();    
        
    ,[])
    
    return (
    <div>
    {
        loading?<Loadingbox > </Loadingbox>
        : error? <Message variant="Danger">{error}</Message>
        : <div className="container">
           {products.map((product)=>{
          return <Product image={product.image} name={product.name} price={product.price} rating={product.rating} brand={product.brand} _id={product._id} category={product.category}  />
       })}</div>
    }
    </div>
    );
}
export default Sareesscreen;