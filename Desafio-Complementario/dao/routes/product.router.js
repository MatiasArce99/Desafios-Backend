import { Router } from 'express';
import { productService } from '../services/product.service.js';

const productRouter = Router();

productRouter.get('/', async (req, res) => {

    try {

        const products = await productService.getAllProducts();
        res.send(products);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

productRouter.post('/', async (req, res) => {

    const product = req.body;

    try {

        const productAdd = await productService.addProduct(product);
        res.send(productAdd);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

productRouter.delete('/:uid', async (req, res) => {

    const uid = req.params.uid;

    try {

        await productService.removeProduct(uid);
        res.status(204);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

export default productRouter;