import { Router} from 'express';
import productService from '../services/product.service.js';

const productRouter = Router();

productRouter.get('/api/products', async (req, res) => {

    const {limit, page, sort, query} = req.query;
});