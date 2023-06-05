import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import viewRouter from './routes/view.router.js';
import { Server } from 'socket.io';

const app = express();
const messages = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/', viewRouter);

mongoose.connect('mongodb+srv://matiasarce214:123@ecommerce.lmtrfb7.mongodb.net/?retryWrites=true&w=majority');

const webServer = app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});

const io = new Server(webServer);

io.on('connection', (socket) => {

    socket.emit('messages', messages);

    socket.on('message', (message) => {

        console.log(message);
        messages.push(message);

        io.emit('messages', messages);
    });
});