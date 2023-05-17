import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get('/realtimeproducts', async (res,req) => {

    res.render('realTimeProducts')
});

export default viewsRouter;