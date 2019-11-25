import { ServicoEntity } from './../entity/servico.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class ServicoController {

    public async find(req: Request, res: Response) {

        try {
            const servicos = await getRepository(ServicoEntity).find();
            
            res.send(servicos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const servico = req.body;

        try {
            await getRepository(ServicoEntity).save(servico);
            res.send(servico);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const servico = await getRepository(ServicoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!servico) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(servico);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const servico = await getRepository(ServicoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!servico) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ServicoEntity).update(servico.id, novo);
            
            //Atualiza ID do novo
            novo.id = servico.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const servico = await getRepository(ServicoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!servico) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ServicoEntity).delete(servico);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new ServicoController();