import express from 'express';
import { productRouter } from './routers/Product.Router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});