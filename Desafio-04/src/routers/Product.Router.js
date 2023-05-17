import { Router } from 'express';
import { listadoProductos } from '../utils/instancias.js';
import {io} from '../utils/socket.js'

//const pm = new ProductManager();
const productRouter = Router();

productRouter.get('/', async (req, res) => {

    let listado = await listadoProductos.getProducts();
    let limite = req.query.limit;

    if (limite) {

        res.send(await listado.slice(0, limite));

    } else {

        res.send({listado});

    }

});

productRouter.get('/:id', async (req, res) => {

    try {

        let productoEncontrado = await listadoProductos.getProductById(parseInt(req.params.id));

        if (productoEncontrado != undefined) {

            res.send({productoEncontrado});

        } else {

            res.status(400).send('No existe el ID');

        }

    } catch (error) {

        res.status(400).send(`Hubo un error al encontrar el ID ${error}`);
    }
});

productRouter.post('/', async (req, res) => {

    try {

        let nuevoProducto = req.body;
        res.send(await listadoProductos.addProduct(nuevoProducto));
        io.emit('product_list_updated', await listadoProductos.getProducts());

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

productRouter.put('/:id', async (req, res) => {

    try {

        let pid = req.params.id;
        let nuevoProducto = req.body;

        res.send(await listadoProductos.updateProduct(pid, nuevoProducto));

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

productRouter.delete('/:id', async (req, res) => {

    try {

        let pid = req.params.id;
        res.send(await listadoProductos.deleteProduct(pid));
        io.emit('product_list_updated', await listadoProductos.getProducts());

    } catch (error) {

        res.status(400).send(`${error}`);
    }
});

export { productRouter };