export class AddAnimal {
    static readonly type = '[Zoo] agregar animal';

    constructor(public nombre: string) { }
}