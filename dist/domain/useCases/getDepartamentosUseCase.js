"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDepartamentosUseCase = void 0;
class GetDepartamentosUseCase {
    constructor(departamentosDao) {
        this.departamentosDao = departamentosDao;
    }
    async execute() {
        return this.departamentosDao.getAllDepartamentos();
    }
}
exports.GetDepartamentosUseCase = GetDepartamentosUseCase;
