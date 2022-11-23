export default class HelloRepository {
    private _list: { id: number; message: string; }[];

    constructor() {
        this._list = [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'Hola!' },
            { id: 3, message: 'Ciao!' },
            { id: 4, message: 'Привет!' },
        ];
    }

    public getList(): { id: number; message: string; }[] {
        return this._list;
    }

    public getHello(id: number): { id: number; message: string; } {
        return this._list.find((v, i) => v.id === id);
    }
}