import express from 'express';
import user from '../models/userModel.js';
import {SendingSignupEmail,SendingCancellationEmail} from '../emails/test.js';
import auth from '../middleware/auth.js';
import bcrypt from 'bcrypt';

const router= express.Router();

router.post('/users/signup',async(req,res)=>{   //sign up
    const obj=new user(req.body); //created an instance of usermodel
   try
   {
    obj.password= await bcrypt.hash(obj.password,8);
    
    obj.items_in_cart= req.body.items_in_cart||[{}];
    obj.total_cart= req.body.total_cart||0;
    await obj.save();
       SendingSignupEmail(obj.email,obj.user_name)
      const token=await obj.generatetoken() //method on instance
      const info={user_name: obj.user_name, email: obj.email,shipping_details:obj.shipping_details,items_in_cart: obj.items_in_cart,total_cart: obj.total_cart,orders: obj.orders,token: token, contact_no: obj.contact_no};
           res.status(200).send(info);    
    }
    catch(e){
        res.status(500).send(e)     
  }
})
router.post('/users/logout',auth,async (req,res)=>{
  const obj= req.user
  obj.tokens=obj.tokens.filter((token)=>{
      return token!==req.token
  })
  await obj.save()
})
router.post('/users/login',async (req,res)=>{
    try{
        const temp= await user.findByCredentials(req.body.email,req.body.password) //function defined on whole collection
           
        const token=await temp.generatetoken() //method on instance
        const obj={user_name: temp.user_name, email: temp.email,shipping_details:temp.shipping_details, items_in_cart: temp.items_in_cart,total_cart: temp.total_cart,orders: temp.orders,token: token, contact_no: temp.contact_no};
           res.send(obj);
    }
    catch(e)
    {
      
        res.status(400).send(e);
    }
})
router.get('/users/me',auth,async(req,res)=>{
    
      if(!req.user)
      { 
        res.status(404).send()
    }
      res.send(req.user)
})
router.patch('/users',auth,async(req,res)=>{
    
   const tobeupdated= Object.keys(req.body)
   
  try{

   tobeupdated.forEach((update)=>{

     if(update=='orders')
      {
        req.user.items_in_cart=[];
        req.user.total_cart=0;
        req.user.orders.push(req.body.orders);
      }
      else if(update!='token')
       req.user[update]=req.body[update];
      })

    try{
      await req.user.save();
      const temp= req.user;
      const obj={user_name: temp.user_name, email: temp.email,shipping_details:temp.shipping_details, items_in_cart: temp.items_in_cart,total_cart: temp.total_cart,contact_no: temp.contact_no,orders: temp.orders,token: req.token};
      res.send(obj)
    }
    catch(e)
    {
     
        res.status(500).send(e.message);
    }
  }
  catch(e){
    
       res.status(500).send(e.message)
  }
})
router.delete('/users/me',auth,async (req,res)=>{
   req.user.remove()
   SendingCancellationEmail(req.user.email,req.user.name)
res.send(req.user)
})

export default router;