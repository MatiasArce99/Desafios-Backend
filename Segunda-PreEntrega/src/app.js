import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

mongoose.connect('mongodb+srv://matiasarce214:123@manager.tfxbp8u.mongodb.net/?retryWrites=true&w=majority');

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});