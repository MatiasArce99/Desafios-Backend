import { Router } from 'express';
import { cartService } from '../services/cart.service.js';

const cartRouter = Router();

cartRouter.get('/', async (req, res) => {

    try {

        const cart = await cartService.getAllCarts();
        res.send(cart);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

cartRouter.post('/', async (req, res) => {

    const cart = req.body;

    try {

        const addCart = await cartService.addCart(cart);
        res.send(addCart);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

cartRouter.post('/:cid/product/:pid', async (req, res) => {

    const cid = req.params.cid;
    const pid = req.params.pid;

    try {

        const cartAdded = await cartService.addProductCart(cid, pid);
        res.send(cartAdded);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});