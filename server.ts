import * as express from 'express';
import {Express,Request,Response} from 'express';
const compression = require('compression')

const cors = require('cors');
const path = require('path');



// import dotenv from 'dotenv';

// dotenv.config({path:'./vars/api.env'});



const app = express(),
    bodyParser = require("body-parser"),
    //port = process.env.serverport;
    port = 3000;


// enable compression
app.use(compression());

app.use(express.static(path.resolve('./thirsty-work')));


// Allow post of formdata
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

// setup cors policy // TODO: set origin with env var to only allow same origin access to the api
var corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.1.94:3000'],
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));


app.get('/test-url',(req,resp)=>{
  resp.send('Get requet test')
}

);

app.get('*', (req,resp)=>{
  resp.sendFile(path.resolve("./thirsty-work/index.html"));
})


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});












