import express from 'express';
import { productoRouter } from './routers/product.router.js';
import { carritoRouter } from './routers/carrito.router.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productoRouter);
app.use('/api/carts', carritoRouter);

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});