"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prestador_entity_1 = require("./../entity/prestador.entity");
const typeorm_1 = require("typeorm");
class PrestadorController {
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prestadores = yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).find();
                res.send(prestadores);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prestador = req.body;
            try {
                yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).save(prestador);
                res.send(prestador);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                //Busca registro pelo ID
                const prestador = yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).findOne(id);
                //Se não encontrar, devolve erro 404
                if (!prestador) {
                    res.status(404).send('Not found');
                    return;
                }
                res.send(prestador);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const novo = req.body;
            try {
                //Busca registro pelo ID
                const prestador = yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).findOne(id);
                //Se não encontrar, devolve erro 404
                if (!prestador) {
                    res.status(404).send('Not found');
                    return;
                }
                yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).update(prestador.id, novo);
                //Atualiza ID do novo
                novo.id = prestador.id;
                res.send(novo);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                //Busca registro pelo ID
                const prestador = yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).findOne(id);
                //Se não encontrar, devolve erro 404
                if (!prestador) {
                    res.status(404).send('Not found');
                    return;
                }
                yield typeorm_1.getRepository(prestador_entity_1.PrestadorEntity).delete(prestador);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new PrestadorController();
//# sourceMappingURL=prestador.controller.js.map