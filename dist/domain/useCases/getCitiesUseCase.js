"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCitiesUseCase = void 0;
class GetCitiesUseCase {
    constructor(citiesDao) {
        this.citiesDao = citiesDao;
    }
    async execute() {
        return this.citiesDao.getAllCities();
    }
}
exports.GetCitiesUseCase = GetCitiesUseCase;
