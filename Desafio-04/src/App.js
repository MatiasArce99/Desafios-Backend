import express from 'express';
import handlebars from 'express-handlebars';
import {server, app} from './utils/socket.js';
import cartRouter from './routers/Cart.Router.js';
import productRouter from './routers/Product.Router.js';
import viewsRouter from './routers/views.router.js';
//import { productRouter } from './routers/Product.Router.js';

//const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use(express.static('public/'));

app.use('/', viewsRouter);
app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);

const port = 8080;
server.listen(port, () => console.log(`Escuchando servidor en puerto ${port}`));
//app.use('/api/products', productRouter);