import { DepartamentosDao } from '../../infrastructure/database/departamentosDao';

export class GetDepartamentosUseCase {
  constructor(private departamentosDao: DepartamentosDao) {}

  async execute() {
    return this.departamentosDao.getAllDepartamentos();
  }
}
