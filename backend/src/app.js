import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import { getSearchdata } from './controller/sample.controller.js';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
}));

app.use(express.json({limit:'5mb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));

const router=Router();

router.get('/sampledata/:search',getSearchdata);
app.use('/api/v1',router);


export default app
