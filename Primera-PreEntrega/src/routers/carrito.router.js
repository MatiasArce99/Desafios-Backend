import { Router } from "express";
import Cart from "../controller/carrito.js";

const c = new Cart('./src/carrito.json');
const carritoRouter = Router();

carritoRouter.post('/', async (req, res) => {

    try {

        
        res.send(await c.agregarCarrito());

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

carritoRouter.get('/', async (req,res) => {

    try {
        
        res.send(await c.leerCarrito());

    } catch (error) {
        
        res.status(400).send(`${error}`);

    }
});

carritoRouter.get('/:cid', async (req, res) => {

    try {
        
        let id = req.params.cid;
        res.send(await c.carritoPorId(id));
        
    } catch (error) {
        
        res.status(400).send(`${error}`)
    }
});

carritoRouter.post('/:cid/product/:pid', async (req,res) => {

    try {
        
        let cartId = req.params.cid;
        let productId = req.params.pid;

        res.send(await c.agregarProductoEnCarrito(cartId, productId));
        
    } catch (error) {
        
        res.status(400).send(`${error}`);

    }
})

export { carritoRouter };