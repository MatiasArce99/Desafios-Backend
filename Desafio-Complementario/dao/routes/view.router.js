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

/*viewRouter.post('/', async (req,res) => {

    const msn = req.body;
    
    try {
        
        const messageAdded = await messagesService.addMessage(msn);
        res.send(messageAdded);

    } catch (error) {
        
        res.status(500).send(`${error}`);

    }
})*/

export default viewRouter;