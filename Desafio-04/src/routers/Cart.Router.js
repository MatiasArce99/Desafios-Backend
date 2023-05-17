import { Router } from "express";
import CartManager from "../controller/CartsManager.js";

const cartRouter = Router();
const cm = new CartManager();

cartRouter.post('/', async (req, res) => {

    try {

        let nuevoProducto = req.body;
        res.send(await cm.addCart(nuevoProducto));

    } catch (error) {

        res.status(400).send(`${error}`);
    }
});

cartRouter.get('/:cid', async (req, res) => {

    try {

        let productoEncontrado = await cm.getProductById(parseInt(req.params.id));

        if (productoEncontrado != undefined) {

            res.send(productoEncontrado);

        } else {

            res.status(400).send('No existe ID');

        }
    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

cartRouter.post('/:cid/product/:pid', async (req, res) => {

    try {
        
        const cid = req.params.cid;
        const pid = req.params.pid;
        res.status(201).send(await cm.addProductToCart(cid, pid));
        
    } catch (error) {
        
        res.status(400).send(`${error}`);
        
    }
})

export { cartRouter };