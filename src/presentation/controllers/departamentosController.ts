import { FastifyRequest, FastifyReply } from 'fastify';
import { GetDepartamentosUseCase } from '../../domain/useCases/getDepartamentosUseCase';

export class DepartamentosController {
  constructor(private getDepartamentosUseCase: GetDepartamentosUseCase) {}

  async getDepartamentos(request: FastifyRequest, reply: FastifyReply) {
    try {
      const cities = await this.getDepartamentosUseCase.execute();
      reply.send(cities);
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  }
}