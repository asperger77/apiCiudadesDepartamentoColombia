import fastify, { FastifyInstance } from 'fastify';
import { CitiesDao } from './infrastructure/database/citiesDao';
import { GetCitiesUseCase } from './domain/useCases/getCitiesUseCase';
import { CitiesController } from './presentation/controllers/citiesController';
import { citiesRoutes } from './presentation/routes/citiesRoutes';
import { departamentosRoutes } from './presentation/routes/departamentosRoutes';
import { DepartamentosDao } from './infrastructure/database/departamentosDao';
import { GetDepartamentosUseCase } from './domain/useCases/getDepartamentosUseCase';
import { DepartamentosController } from './presentation/controllers/departamentosController';

export class Application {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify({
      logger: true,
      disableRequestLogging: true
    });
    this.setupDependencies();
    this.setupRoutes();
  }

  private setupDependencies() {
    const citiesDao = new CitiesDao();
    const getCitiesUseCase = new GetCitiesUseCase(citiesDao);
    const citiesController = new CitiesController(getCitiesUseCase);

    const departamentosDao = new DepartamentosDao();
    const getDepartamentosUseCase = new GetDepartamentosUseCase(departamentosDao);
    const departamentosController = new DepartamentosController(getDepartamentosUseCase);

    this.server.decorate('citiesController', citiesController);
    this.server.decorate('departamentosController', departamentosController);
  }

  private setupRoutes() {
    citiesRoutes(this.server);
    departamentosRoutes(this.server);
  }

  async start(port: number) {
    try {
      await this.server.listen({ port, host: '0.0.0.0' });
      console.log(`Server is running on http://localhost:${port}`);
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }
}