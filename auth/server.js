const express = require('express');
const app = express();
const connectToDb = require('./config/connectToDb');

connectToDb();
app.use(express.json({ extended: false }));

app.use('/api/users',require('./routes/users'));


let PORT = process.env.PORT || 6000;

app.listen(PORT,() => console.log(`server is running on port: ${PORT}`));

