import { FastifyInstance } from 'fastify'
import { DepartamentosController } from '../controllers/departamentosController';

export function departamentosRoutes(fastify: FastifyInstance) {
  const controller = fastify.departamentosController as DepartamentosController;

  fastify.get('/departamentos', controller.getDepartamentos.bind(controller));
}