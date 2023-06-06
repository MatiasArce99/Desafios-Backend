import { Router } from 'express';
import ProductManager from '../controller/productManager.js';

const p = new ProductManager('./src/productos.json');
const viewRouter = Router();

viewRouter.get('/', async (req, res) => {

    try {

        const products = await p.obtenerProducto();
        res.send('home', { products });

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

export { viewRouter };