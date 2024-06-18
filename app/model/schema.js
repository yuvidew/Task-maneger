import mongoose , {Schema} from "mongoose";

const TaskSchema = new Schema({
    title : String,
    date : String,
    content : String,
})

export const schema = mongoose.models.tasks || mongoose.model("tasks" , TaskSchema)