import { Router } from 'express';
import { messagesService } from '../services/messages.services.js';

const viewRouter = Router();

viewRouter.use('/', async (req, res) => {

    try {

        const messages = await messagesService.getAllMessages()
        res.render('messages', { messages });

    } catch (error) {

        res.render(error);

    }

});

export default viewRouter;