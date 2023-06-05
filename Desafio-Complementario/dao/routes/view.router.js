import { Router } from 'express';

const viewRouter = Router();

viewRouter.get('/', (req, res) => {

    res.render('chat');

});

export default viewRouter;