import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number

}
const connection:ConnectionObject={}

export async function connect():Promise<void>{
    //if database is connected 
    if(connection.isConnected){
        console.log('already connected to mongo DB')
        return;
    }
    try{
        const db=await mongoose.connect(process.env.MONGO_URI || '',{})        
        connection.isConnected = db.connections[0].readyState//readyState is a number
        console.log('new connection to mongo DB')
    }
    catch(error){
        console.log('database connection failed',error)
        process.exit(1)
        
    }   
}

/*
try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully');
        })
        connection.on('error',(err)=>{
            console.log('MongoDB connection error'+err);
            process.exit();
        })

    }
    catch(error){
        console.log('something went wrong!')
        console.log(error);
    }
*/