import mongoose from "mongoose";


export const Connection = async (URL) => {
    
    try {
        await mongoose.connect(URL, { useunifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connection with the database ', error.message);
    }
}

export default Connection;