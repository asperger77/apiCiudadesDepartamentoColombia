"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const fastify_1 = __importDefault(require("fastify"));
const citiesDao_1 = require("./infrastructure/database/citiesDao");
const getCitiesUseCase_1 = require("./domain/useCases/getCitiesUseCase");
const citiesController_1 = require("./presentation/controllers/citiesController");
const citiesRoutes_1 = require("./presentation/routes/citiesRoutes");
const departamentosRoutes_1 = require("./presentation/routes/departamentosRoutes");
const departamentosDao_1 = require("./infrastructure/database/departamentosDao");
const getDepartamentosUseCase_1 = require("./domain/useCases/getDepartamentosUseCase");
const departamentosController_1 = require("./presentation/controllers/departamentosController");
class Application {
    constructor() {
        this.server = (0, fastify_1.default)({
            logger: true,
            disableRequestLogging: true
        });
        this.setupDependencies();
        this.setupRoutes();
    }
    setupDependencies() {
        const citiesDao = new citiesDao_1.CitiesDao();
        const getCitiesUseCase = new getCitiesUseCase_1.GetCitiesUseCase(citiesDao);
        const citiesController = new citiesController_1.CitiesController(getCitiesUseCase);
        const departamentosDao = new departamentosDao_1.DepartamentosDao();
        const getDepartamentosUseCase = new getDepartamentosUseCase_1.GetDepartamentosUseCase(departamentosDao);
        const departamentosController = new departamentosController_1.DepartamentosController(getDepartamentosUseCase);
        this.server.decorate('citiesController', citiesController);
        this.server.decorate('departamentosController', departamentosController);
    }
    setupRoutes() {
        (0, citiesRoutes_1.citiesRoutes)(this.server);
        (0, departamentosRoutes_1.departamentosRoutes)(this.server);
    }
    async start(port) {
        try {
            await this.server.listen({ port, host: '0.0.0.0' });
            console.log(`Server is running on http://localhost:${port}`);
        }
        catch (err) {
            this.server.log.error(err);
            process.exit(1);
        }
    }
}
exports.Application = Application;
