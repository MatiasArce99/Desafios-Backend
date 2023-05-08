import { Router } from 'express';

const products = [];
const productRouter = Router();

productRouter.get('/', (req, res) => {

    res.send(products);

});

export { productRouter };