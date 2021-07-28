import express from 'express';
import productModel from '../models/productModel.js';
import data from '../data.js';
 const router=express.Router();

// router.get('/insert',async(req,res)=>{
//   // await productModel.remove({});
//   data.products.forEach(async(x)=>{
//     const p=new productModel(x);
//       await p.save();
//   })
//   const arr= await productModel.find().sort({price:1});
//   res.status(200).send(arr);
// })
 router.get('/api/shirts',async(req,res)=>{
     const products= await productModel.find({category:'shirts',price:{$gt:60,$lt:120}});
    res.send(products);
  })
  router.get('/api/pants',async (req,res)=>{
    const products= await productModel.find({category:'pants'}).sort({price:1});
    res.send(products);
  })
  router.get('/api/sarees',async (req,res)=>{
    const products= await productModel.find({category:'sarees'}).sort({price:1});
    res.send(products);
  })
  router.get('/api/suits',async (req,res)=>{
    const products= await productModel.find({category:'suits'}).sort({price:1});
    res.send(products);
  })
  router.get('/api',async (req,res)=>{
  
    const category=req.query.category;
    var product;
    switch(category)
    {
      case 'shirts':
        {
           product= await productModel.findById(req.query.id);
        }
        break;
        case 'pants':
          {
            product= await productModel.findById(req.query.id);
          }
          break;
        case 'sarees':
          {
            product= await productModel.findById(req.query.id);
          } 
          break;
        case 'suits':
            {
                product= await productModel.findById(req.query.id);
            }
            break;
         default:
          {
            product={};
          }
       }
  
    if(product)
     res.send(product);
     else
      res.status(404).send('product not found')
  })
  router.get('/products/seed',async(req,res)=>{
      try{
         const products= await productModel.find({});
        res.status(200).send(products);
      }
      catch(e){
         res.status(400).send(e);
      }
       
  })
  router.post('/api/product',async (req,res)=>{
     const obj= new productModel(req.body);
      try{
          await obj.save();
          res.status(200).send();
      }
      catch(e){
          res.status(500).send(e);
      }

  })
  export default router;
