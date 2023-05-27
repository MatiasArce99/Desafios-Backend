import { Router } from 'express';
import Producto from '../controller/producto.js';

const p = new Producto('./src/productos.json');
const productoRouter = Router();

productoRouter.get('/', async (req, res) => {

    let listado = await p.obtenerProducto();
    let limite = req.query.limit;

    if (limite) {

        res.send(await listado.slice(0, limite));

    } else {

        res.send(listado);

    }
});

productoRouter.get('/:pid', async (req, res) => {

    try {

        let productoId = await p.obtenerProductoPorId(parseInt(req.params.pid));

        if (productoId) {

            res.send(productoId);

        } else {

            res.send('No existe ID');

        }

    } catch (error) {

        res.status(400).send(`${error}`);

    }

});

productoRouter.post('/', async (req, res) => {

    try {

        let nuevoProducto = req.body;
        res.send(await p.agregarProducto(nuevoProducto));

    } catch (error) {

        res.status(400).send(`${error}`);

    }
});

productoRouter.put('/:pid', async (req, res) => {

    try {

        let pid = req.params.pid;
        let nuevoProducto = req.body;
        res.send(await p.actualizarProducto(pid, nuevoProducto));

    } catch (error) {

        res.status(400).send(`${error}`);
    }
});

productoRouter.delete('/:pid', async (req, res) => {

    try {
        
        let pid = req.params.pid;
        res.send(await p.eliminarProducto(pid));
        
    } catch (error) {
        
        res.status(400).send(`${error}`);

    }
});

export { productoRouter };