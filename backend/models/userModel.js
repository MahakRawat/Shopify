import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    password:{
        type: String,
        required: true,
        trim:true,
        minLength:7,
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
        validate(value)
        {
            if(!validator.isEmail(value))
             throw new Error('invalid email')
        }
    },
    isAdmin:{
        type: Boolean,
        required: true,
    },
    user_name:{
        type: String,
        required: true,
    },
    contact_no:{
        type: Number,
        required: true
    },
    shipping_details:{
        type: String
    },
    tokens: [{
          token:{
              type: String,
              required:true,
          }
    }],
    items_in_cart:[
        {
            product:{
               type:mongoose.Schema.Types.ObjectId,
               required: true,
            },
            quantity:{
                type: Number,
                rquired: true
            },
            price:{
                type:Number
            },
            name:{
                type:String
            },
            image:{
                type: String
            },
            category:{
                type: String
            }
           
        }
    ],
    total_cart:{
        type: Number,
        default: 0
    },
    orders:[
        {
            items:[{
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    required: true,
                 },
                 quantity:{
                     type: Number,
                     rquired: true
                 },
                 price:{
                     type:Number
                 },
                 name:{
                     type:String
                 },
                 image:{
                     type: String
                 },
                 category:{
                     type: String
                 }
            }],
            totalPrice:{
                  type: Number,
                  required: true,
            },
            state:{
                type: String,
                required: true,
            }
        }
    ]

},{timestamps: true});

userSchema.statics.findByCredentials= async (email,password)=> //model method
{
    const temp=await userModel.findOne({email})

    if(!temp)
      { 
          throw new Error('unable to login')
      }
    const ismatch= await bcrypt.compare(password,temp.password)
   if(ismatch)
    return temp;
   else
   throw new Error('unable to login')
}
userSchema.methods.generatetoken = async function(){ //instance method //arrow function is not made since it doesn't has access to this  
    try{
     const token= jwt.sign({ _id: this._id.toString() }, 'thisismynewcourse', { expiresIn: "30 days" })
     this.tokens=this.tokens.concat({token})
       this.save()
     return token
    }
    catch(e){
        console.log(e)
        return e
    }
} 
 const userModel = mongoose.model('userModel', userSchema);
 export default userModel;