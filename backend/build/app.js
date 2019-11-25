"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//Rotas
const estado_router_1 = require("./router/estado.router");
const cidade_router_1 = require("./router/cidade.router");
const contratante_router_1 = require("./router/contratante.router");
const servico_router_1 = require("./router/servico.router");
const tabelapreco_router_1 = require("./router/tabelapreco.router");
const prestador_router_1 = require("./router/prestador.router");
const pedido_router_1 = require("./router/pedido.router");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    //Carrega os middleware da aplicação
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }
    routes() {
        this.express.use('/estados', estado_router_1.default);
        this.express.use('/cidades', cidade_router_1.default);
        this.express.use('/contratantes', contratante_router_1.default);
        this.express.use('/servicos', servico_router_1.default);
        this.express.use('/tabelaprecos', tabelapreco_router_1.default);
        this.express.use('/prestadores', prestador_router_1.default);
        this.express.use('/pedidos', pedido_router_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map