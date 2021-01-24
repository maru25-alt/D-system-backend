import mongoose  from'mongoose';
import  dotenv from 'dotenv';

dotenv.config()
const connection_url = "mongodb+srv://rudo:4gvzcCYefKmyoWZQ@cluster0.moxlj.mongodb.net/dsystem?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.once('open', ()=> {
    console.log("db connnected localhost db")
})


export default mongoose;