"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citiesRoutes = citiesRoutes;
function citiesRoutes(fastify) {
    const controller = fastify.citiesController;
    fastify.get('/ciudades', controller.getCities.bind(controller));
}
