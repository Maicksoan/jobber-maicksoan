import { PrestadorEntity } from './../entity/prestador.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class PrestadorController {

    public async find(req: Request, res: Response) {

        try {
            const prestadores = await getRepository(PrestadorEntity).find();
            
            res.send(prestadores);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const prestador = req.body;

        try {
            await getRepository(PrestadorEntity).save(prestador);
            res.send(prestador);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const prestador = await getRepository(PrestadorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!prestador) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(prestador);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const prestador = await getRepository(PrestadorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!prestador) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PrestadorEntity).update(prestador.id, novo);
            
            //Atualiza ID do novo
            novo.id = prestador.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const prestador = await getRepository(PrestadorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!prestador) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PrestadorEntity).delete(prestador);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new PrestadorController();