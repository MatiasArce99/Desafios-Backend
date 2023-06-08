import { Router } from 'express';
import { cartService } from '../services/cart.service.js';

const cartRouter = Router();

cartRouter.get('/', async (req, res) => {

    try {

        const carts = await cartService.getAllCarts();
        res.send(carts);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

cartRouter.post('/', async (req, res) => {

    const cart = req.body;

    try {

        const cartAdded = await cartService.addCart(cart);
        res.send(cartAdded);

    } catch (error) {

        res.status(500).send(`${error}`);

    }
});

//cartRouter.post();