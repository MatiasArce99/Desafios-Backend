import express from 'express';
import http, { Server } from 'http';
import { listadoProductos } from '../public/instancias.js';

export const app = express();
export const server = http.createServer(app);
export const io = new Server(server);

io.on('connection', async (socket) => {

    console.log('Cliente conectado');

    socket.emit('product_list', await listadoProductos.getProducts());

    socket.on('disconnect', () => {

        console.log('Cliente desconectado');
    })
})