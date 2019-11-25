"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contratante_controller_1 = require("../controller/contratante.controller");
class ContratanteRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', contratante_controller_1.default.find);
        this.router.post('/', contratante_controller_1.default.create);
        this.router.get('/:id([0-9]+)', contratante_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', contratante_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', contratante_controller_1.default.delete);
    }
}
exports.default = new ContratanteRouter().router;
//# sourceMappingURL=contratante.router.js.map