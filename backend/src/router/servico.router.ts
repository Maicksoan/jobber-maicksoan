import { Router } from 'express';
import  servicoController  from '../controller/servico.controller';

class ServicoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', servicoController.find);
        this.router.post('/', servicoController.create);

        this.router.get('/:id([0-9]+)', servicoController.findById);
        this.router.put('/:id([0-9]+)', servicoController.update);
        this.router.delete('/:id([0-9]+)', servicoController.delete);
    }

}

export default new ServicoRouter().router;