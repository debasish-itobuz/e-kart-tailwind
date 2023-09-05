import mongoose from "mongoose";

export const connectDb = async() =>{
    const connectParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        const connect = await mongoose.connect(process.env.CONNECT_DB, connectParams);
        // console.log(process.env.CONNECT_DB);
        console.log("Database connected");
    } catch(error) {
        console.log(error);
    }
}