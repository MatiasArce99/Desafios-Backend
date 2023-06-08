import { Router } from 'express';
import { productService } from '../services/product.service.js'

const productRouter = Router();

productRouter.get('/', async (req, res) => {

    try {

        const products = await productService.getAllProducts();
        res.send(products);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

productRouter.get('/:pid', async (req, res) => {

    const pid = req.params.pid;

    try {

        const product = await productService.getProductById(pid);
        res.send(product);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

productRouter.post('/', async (req, res) => {

    const product = req.body;

    try {

        const addProduct = await productService.addProduct(product);
        res.send(addProduct);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

productRouter.delete('/:pid', async (req, res) => {

    const pid = req.params.pid;

    try {

        await productService.removeProduct(pid);
        res.status(204);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

export default productRouter;