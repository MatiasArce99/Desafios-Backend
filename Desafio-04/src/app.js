import express from 'express';
import handlerbars from 'express-handlebars';
//import { productRouter } from './routers/Product.Router.js';

const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
//app.use('/api/products', productRouter);