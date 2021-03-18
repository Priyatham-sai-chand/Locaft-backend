const mongoose = require("mongoose");
const config = require('config');

const connectToDb = async () => {
    try{
        await mongoose.connect(
            config.get('mongoURI'),
            {
                useCreateIndex:true,
                useFindAndModify:true,
                useUnifiedTopology:true,
                useNewUrlParser: true
            }
        )
        console.log("mongo connection secure!");

    } catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDb;