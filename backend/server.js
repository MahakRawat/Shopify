import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
 const app=express();


 mongoose.connect(process.env.MONGODB_URL||"mongodb://127.0.0.1:27017/Shopify",{useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
  console.log('connected')}).catch((e)=>{
      console.log(e)
  })

 app.use(express.json()); // express.json() convert the incoming json data(only) into object eg {"name":"mahak rawat"} to {name: mahak rawat}

 app.use(express.urlencoded({ extended: true })); // converts the incoming x-www-form-urlencoded(only) data into object
 app.use(productRouter);
 app.use(userRouter);


 app.get('/',(req,res)=>{
    res.send('Server is up');
 })
 const port= process.env.PORT||4000 ;
 app.listen(port,()=>{
     console.log(`server is up on ${port}`);
 })