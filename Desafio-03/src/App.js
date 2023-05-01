import express from 'express';
import ProductManager from '../models/ProductManager.js'

const pm = new ProductManager('./productos.json');
const app = express();

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req,res) => {

    let productList = await pm.getProducts();
    res.send(productList);
});