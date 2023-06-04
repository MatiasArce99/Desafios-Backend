import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

mongoose.connect('mongodb+srv://matiasarce214:123@ecommerce.lmtrfb7.mongodb.net/?retryWrites=true&w=majority');

app.listen(8080, () => {

    console.log('Escuchando puerto 8080');

});