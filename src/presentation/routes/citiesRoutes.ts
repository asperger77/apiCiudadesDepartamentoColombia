import { FastifyInstance } from 'fastify'
import { CitiesController } from '../controllers/citiesController'

export function citiesRoutes(fastify: FastifyInstance) {
  const controller = fastify.citiesController as CitiesController;

  fastify.get('/ciudades', controller.getCities.bind(controller));
}