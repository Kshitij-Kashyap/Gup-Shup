import mongoose from "mongoose";

const connectTOMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("connected to DB")
    } catch (error) {
        console.log("connecting to DB")
    }
}

export default connectTOMongoDB;