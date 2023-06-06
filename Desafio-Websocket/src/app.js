import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'views/');
app.set('view engine', 'handlebars');

const webServer = app.listen(8080, () => {

    console.log('Escuchado puerto 8080');

});

const io = new Server(webServer);