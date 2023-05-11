import express from 'express';
import { cartRouter } from './routers/Cart.Router.js'
import { productRouter } from './routers/Product.Router.js';

//const pm = new ProductManager('./productos.json')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});

/*app.get('/api/products', async (req, res) => {

    let listado = await pm.getProducts();
    let limite = req.query.limit;

    if (limite) {

        res.send(await listado.slice(0, limite));

    } else {

        res.send(listado);

    }
});*/

/*app.get('/products/:id', async (req,res) => {

    try {
        
        let productoEncontrado = await pm.getProductById(parseInt(req.params.id));

        if(productoEncontrado != undefined){

            res.send(productoEncontrado);

        }else{

            res.status(400).send('No existe ID');

        }

    } catch (error) {
        
        res.status(400).send(`Hubo un error al encontrar el ID ${error}`);

    }
});*/