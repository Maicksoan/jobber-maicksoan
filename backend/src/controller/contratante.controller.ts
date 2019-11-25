import { ContratanteEntity } from '../entity/contratante.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class ContratanteController {

    public async find(req: Request, res: Response) {

        try {
            const contratantes = await getRepository(ContratanteEntity).find();
            
            res.send(contratantes);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const contratante = req.body;

        try {
            await getRepository(ContratanteEntity).save(contratante);
            res.send(contratante);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const contratante = await getRepository(ContratanteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!contratante) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(contratante);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const contratante = await getRepository(ContratanteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!contratante) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ContratanteEntity).update(contratante.id, novo);
            
            //Atualiza ID do novo
            novo.id = contratante.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const contratante = await getRepository(ContratanteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!contratante) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ContratanteEntity).delete(contratante);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new ContratanteController();