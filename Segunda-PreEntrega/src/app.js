import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import productRouter from './routes/product.router.js';
import viewsRouter from './routes/views.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

app.set(express.static('public'));

app.use('/api/products', productRouter);
app.use('/', viewsRouter);

mongoose.connect(

    'mongodb+srv://matiasarce214:123@manager.tfxbp8u.mongodb.net/?retryWrites=true&w=majority'

);

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});