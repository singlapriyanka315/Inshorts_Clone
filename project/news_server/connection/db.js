import mongoose from "mongoose";


const Connection = async () => {
    try {   
        const URL = `mongodb://priya:priya@cluster0-shard-00-00.ibzko.mongodb.net:27017,cluster0-shard-00-01.ibzko.mongodb.net:27017,cluster0-shard-00-02.ibzko.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-r5x4lq-shard-0&authSource=admin&retryWrites=true&w=majority`

   await mongoose.connect(URL,{useNewUrlParser: true})
    
    console.log('Database connected successfully');
    }
    catch(error){
       console.log('Error while connecting with db',error);
    }

}
export default Connection;