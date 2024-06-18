import mongoose from "mongoose";

export const DBConnect = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MDURL , {
            dbName : 'Task-Manager-Data'
        })
        console.log(connection);
        console.log("connected");
    } catch (error) {
        console.log("err" , error);
    }
}