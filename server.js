const express = require("express");
const config =  require("config");
const mongoose = require("mongoose");
const cors = require("cors");
import { mongoURI } from './config/config';

// set up express

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => { res.send('Hello from Express!')});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
  //config.get('mongoURI'),
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/users"));
