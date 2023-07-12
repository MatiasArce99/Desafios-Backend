import { Router } from 'express';
import productService from '../services/product.service.js'

const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {

    const { limit, page } = req.query;
    const data = await productService.getProducts(limit, page);
    res.render('index', data);

});

export default viewsRouter;