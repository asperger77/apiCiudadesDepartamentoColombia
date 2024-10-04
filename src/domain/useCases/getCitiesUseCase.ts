import { CitiesDao } from '../../infrastructure/database/citiesDao';

export class GetCitiesUseCase {
  constructor(private citiesDao: CitiesDao) {}

  async execute() {
    return this.citiesDao.getAllCities();
  }
}
