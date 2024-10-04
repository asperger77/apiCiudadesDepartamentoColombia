import { FastifyRequest, FastifyReply } from 'fastify';
import { GetCitiesUseCase } from '../../domain/useCases/getCitiesUseCase';

export class CitiesController {
  constructor(private getCitiesUseCase: GetCitiesUseCase) {}

  async getCities(request: FastifyRequest, reply: FastifyReply) {
    try {
      const cities = await this.getCitiesUseCase.execute();
      reply.send(cities);
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  }
}