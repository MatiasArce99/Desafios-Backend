import { Router} from 'express';
import productService from '../services/product.service.js';

const productRouter = Router();

productRouter.get('/', async (req, res) => {

    //const {limit, page, sort, query} = req.query;
    const data = await productService.getProducts();
    console.log(data);

});

export default productRouter;