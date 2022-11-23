import HelloRepository from './HelloRepository';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class HelloService {
    private _helloRepository: HelloRepository;

    constructor(helloRepository: HelloRepository) {
        this._helloRepository = helloRepository;
    }

    public getList() {
        return this._helloRepository.getList();
    }

    public getOne(id: number) {
        return this._helloRepository.getHello(id);
    }

}