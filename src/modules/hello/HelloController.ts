import express from 'express';
import HelloService from './HelloService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class HelloController {
    private _router: express.Router;
    private _helloService: HelloService;

    constructor(helloService: HelloService) {
        this._router = express.Router();
        this._helloService = helloService;
    }

    public getIndex(req: express.Request, res: express.Response) {
        const list = this._helloService.getList();
        return res.status(200).json(list);
    }

    public getById(req: express.Request, res: express.Response) {
        const id: number = Number(req.params['id']);
        const hello = this._helloService.getOne(id);

        if(!hello) {
            return res.status(404).json({});
        }

        return res.status(200).json(hello);
    }

    public getRoutes() {
        this._router.get('/:id', (req, res) => this.getById(req, res));
        this._router.get('/', (req, res) => this.getIndex(req, res));

        return this._router;
    }
}