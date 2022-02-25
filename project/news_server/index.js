import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// const dotenv= require("dotenv");
//components
import Connection from './connection/db.js';
import Route from './routes/route.js'
import DefaultData from './default.js'

const app = express();
// dotenv.config({path:'/.co'});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

const username = process.priya;
const password = process.priya;
 const PORT =  8000;

Connection(username, password);

// if(process.env.NODE_ENV=="production"){
//     app.use(express.static("news/build"));
// }

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();