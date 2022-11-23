import express from 'express';
import { helloController } from './container';

export default class Router {
    private _router: express.Router;

    constructor() {
        this._router = express.Router();
    }

    public getRoutes() {
        this._router.use('/hello', helloController.getRoutes());
        this._router.get('/', (req, res) => res.send('Welcome :)'));

        return this._router;
    }
}