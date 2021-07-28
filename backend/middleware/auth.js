import user from '../models/userModel.js';
import jwt from 'jsonwebtoken';


const auth= async(req,res,next)=>{
try{
  const token=req.body.token;
  const decode= jwt.verify(token,'thisismynewcourse') //return payload...which is _id here
  const obj= await user.findOne({_id:decode._id,'tokens.token':token})
  if(!obj)
  {
     throw new Error()
  }
  req.token=token;
  req.user=obj;
   next()
}
catch(e){
  res.status(503).send('not authenticated')
}
}
export default auth;