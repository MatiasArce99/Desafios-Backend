import express from 'express';
import ProductManager from './ProductManager.js';

const pm = new ProductManager('./productos.json')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});

app.get('/products', async (req, res) => {

    //let productList = await pm.getProducts();
    res.send(await pm.getProducts());
});