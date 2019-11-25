import { Router } from 'express';
import  contratanteController  from '../controller/contratante.controller';

class ContratanteRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', contratanteController.find);
        this.router.post('/', contratanteController.create);

        this.router.get('/:id([0-9]+)', contratanteController.findById);
        this.router.put('/:id([0-9]+)', contratanteController.update);
        this.router.delete('/:id([0-9]+)', contratanteController.delete);
    }

}

export default new ContratanteRouter().router;