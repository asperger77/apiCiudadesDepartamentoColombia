import { FastifyInstance } from 'fastify'
import { CitiesController } from '../presentation/controllers/citiesController'
import { DepartamentosController } from '../presentation/controllers/departamentosController'

declare module 'fastify' {
  export interface FastifyInstance {
    citiesController: CitiesController
    departamentosController: DepartamentosController
  }
}