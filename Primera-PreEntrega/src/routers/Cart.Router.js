import { Router } from "express";
import CartManager from "../CartsManager.js";

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

export { cartRouter };