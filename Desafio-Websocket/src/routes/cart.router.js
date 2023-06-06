import { Router } from "express";
import CartManager from '../controller/cartManager.js';

const c = new CartManager('./src/carrito.json');
const carritoRouter = Router();

carritoRouter.post('/', async (req, res) => {

    try {


        res.send(await c.agregarCarrito());

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

carritoRouter.get('/', async (req, res) => {

    try {

        res.send(await c.leerCarrito());

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

carritoRouter.get('/:cid', async (req, res) => {

    try {

        res.send(await c.carritoPorId(parseInt(req.params.cid)));

    } catch (error) {

        res.status(400).send(`${error}`)
    }
});

carritoRouter.post('/:cid/product/:pid', async (req, res) => {

    try {

        let cartId = req.params.cid;
        let productId = req.params.pid;

        res.send(await c.agregarProductoEnCarrito(parseInt(cartId), parseInt(productId)));

    } catch (error) {

        res.status(400).send(`${error}`);

    }
})

export { carritoRouter };