"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentosController = void 0;
class DepartamentosController {
    constructor(getDepartamentosUseCase) {
        this.getDepartamentosUseCase = getDepartamentosUseCase;
    }
    async getDepartamentos(request, reply) {
        try {
            const cities = await this.getDepartamentosUseCase.execute();
            reply.send(cities);
        }
        catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });
        }
    }
}
exports.DepartamentosController = DepartamentosController;
