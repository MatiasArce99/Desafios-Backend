import { Router } from "express";
import {listadoCarrito} from "../utils/instancias.js"
const cartRouter = Router();
//const cm = new CartManager();

cartRouter.post('/', async (req, res) => {

    try {

        /*let nuevoProducto = req.body;
        res.send(await cm.addCart(nuevoProducto));*/
        res.status(201).send(await listadoCarrito.addCart());

    } catch (error) {

        res.status(400).send(`${error}`);
    }
});

cartRouter.get('/:cid', async (req, res) => {

    try {

        /*let productoEncontrado = await cm.getProductById(parseInt(req.params.id));

        if (productoEncontrado != undefined) {

            res.send(productoEncontrado);

        } else {

            res.status(400).send('No existe ID');

        }*/
        const cid = req.params.cid;
        let getId = await listadoCarrito.getCartById(cid);
        res.status(200).send(await getId);

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

cartRouter.post('/:cid/product/:pid', async (req, res) => {

    try {
        
        const cid = req.params.cid;
        const pid = req.params.pid;
        res.status(201).send(await listadoCarrito.addProductToCart(cid, pid));
        
    } catch (error) {
        
        res.status(400).send(`${error}`);
        
    }
})

export { cartRouter };