import { Router } from "express";
import { listadoProductos } from '../utils/instancias.js'

const viewsRouter = Router();

viewsRouter.get('/', async (res, req) => {

    const productList = await listadoProductos.getProducts();
    res.render('home', { title: 'Listado Productos', product: productList });

});

viewsRouter.get('/realtimeproducts', async (res, req) => {

    res.render('realTimeProducts', { title: 'Productos en tiempo real' });
});

export default viewsRouter;