import { Router } from 'express';
import { productService } from '../services/product.service.js'
import { cartService } from '../services/cart.service.js';

const viewRouter = Router();

viewRouter.use('/', async (req, res) => {

    try {

        const products = await productService.getAllProducts();
        res.render('products', { products });

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

export default viewRouter;