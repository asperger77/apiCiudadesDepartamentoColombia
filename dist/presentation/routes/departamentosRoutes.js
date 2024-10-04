"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departamentosRoutes = departamentosRoutes;
function departamentosRoutes(fastify) {
    const controller = fastify.departamentosController;
    fastify.get('/departamentos', controller.getDepartamentos.bind(controller));
}
