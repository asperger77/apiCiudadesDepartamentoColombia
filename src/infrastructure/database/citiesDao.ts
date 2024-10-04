import fs from 'fs/promises';
import path from 'path';

interface City {
  region: string;
  codigo_dane_depar: string;
  departamento: string;
  codigo_dane_municipio: string;
  municipio: string;
}

export class CitiesDao {
  private readonly filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, '../../../data/ciudades.json');
  }

  async getAllCities(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading cities file:', error);
      throw new Error('Unable to fetch cities');
    }
  }
}