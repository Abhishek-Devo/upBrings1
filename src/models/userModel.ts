import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
        username:{
            type:String,
            required:[true,"please provide a username"],
            unique:true,
        },
        email:{
            type:String,
            required:[true,"please provide an email"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"please provide a password"],
        },        
    
        isAdmin:{
            type:Boolean,
            default:false,
        },
        
})

const User=mongoose.models.NewUsers || mongoose.model('NewUsers',userSchema)

export default User;