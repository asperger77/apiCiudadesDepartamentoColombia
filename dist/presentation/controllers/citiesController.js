"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesController = void 0;
class CitiesController {
    constructor(getCitiesUseCase) {
        this.getCitiesUseCase = getCitiesUseCase;
    }
    async getCities(request, reply) {
        try {
            const cities = await this.getCitiesUseCase.execute();
            reply.send(cities);
        }
        catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });
        }
    }
}
exports.CitiesController = CitiesController;
