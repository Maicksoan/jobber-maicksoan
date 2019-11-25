import { Router } from 'express';
import  prestadorController   from '../controller/prestador.controller';

class PrestadorRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', prestadorController.find);
        this.router.post('/', prestadorController.create);

        this.router.get('/:id([0-9]+)', prestadorController.findById);
        this.router.put('/:id([0-9]+)', prestadorController.update);
        this.router.delete('/:id([0-9]+)', prestadorController.delete);
    }

}

export default new PrestadorRouter().router;