const mongoose=require('mongoose')

const feedBackSchema=new mongoose.Schema({
        username:{
            type:String,
            required:[true,"name required"],
            
        },
        email:{
            type:String,
            required:[true,"please provide an email"],
            
        },
       message:{
        required:[true,'message is required '],
        type:String,
       }
        
})

const feedback=mongoose.models.feedBack || mongoose.model('feedBack',feedBackSchema)

export default feedback;