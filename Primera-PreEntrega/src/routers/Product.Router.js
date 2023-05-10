import { Router } from 'express';
import ProductManager from '../ProductManager.js';

const pm = new ProductManager('../productos.json');
const productRouter = Router();

productRouter.get('/', async (req, res) => {

    let listado = await pm.getProducts();
    let limite = req.query.limit;

    if (limite) {

        res.send(await listado.slice(0, limite));

    } else {

        res.send(listado);
        //console.log(listado);

    }

});

productRouter.get('/:id', async (req, res) => {

    try {
        
        let productoEncontrado = await pm.getProductById(parseInt(req.params.id));

        if(productoEncontrado != undefined){

            res.send(productoEncontrado);

        } else {

            res.status(400).send('No existe el ID');

        }

    } catch (error) {
        
        res.status(400).send(`Hubo un error al encontrar el ID ${error}`);
    }
});

export { productRouter };