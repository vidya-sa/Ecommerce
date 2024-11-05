import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conDB = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDB connected:${conDB.connection.host}`)
    }catch(error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}


export default connectDB;
