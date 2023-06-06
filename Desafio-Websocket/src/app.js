import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import { productoRouter } from './routes/product.router.js';
import { carritoRouter } from './routes/cart.router.js';
import { viewRouter } from './routes/view.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use('/api/products', productoRouter);
app.use('/api/carts', carritoRouter);
app.use('/', viewRouter);

app.listen(8080, () => {

    console.log('Escuchado puerto 8080');

});

//const io = new Server(webServer);