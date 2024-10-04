import fs from 'fs/promises';
import path from 'path';

interface Departamento {
  region: string;
  codigo_dane_depar: string;
  departamento: string;
  codigo_dane_municipio: string;
  municipio: string;
}

interface Departamentos {
  region: string;
  codigo_dane_depar: string;
  departamento: string;
}

export class DepartamentosDao {
  private readonly filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, '../../../data/ciudades.json');
  }

  async getAllDepartamentos(): Promise<Departamentos[]> {
    try {
      console.log('getAllDepartamentos');
      const data = await fs.readFile(this.filePath, 'utf-8');
      const dataDeparmentos: Departamento[] = JSON.parse(data);

      if (Array.isArray(dataDeparmentos)) {
        // Agrupamos los departamentos y eliminamos duplicados
        const departamentosUnicos = [...new Set(dataDeparmentos.map((item) => item.departamento))];

        // Mapeamos los departamentos únicos a la estructura que sigue la interfaz Departamentos
        const departamentos: Departamentos[] = departamentosUnicos.map((depto) => {
          // Encuentra el primer elemento que coincida con el nombre del departamento
          const departamentoData = dataDeparmentos.find((item) => item.departamento === depto);

          // Retorna el objeto con la estructura Departamentos
          return {
            region: departamentoData?.region || '',
            codigo_dane_depar: departamentoData?.codigo_dane_depar || '',
            departamento: depto,
          };
        });

        console.log(`\nLista de departamentos (${departamentos.length} en total):`);
        console.log(departamentos);

        return departamentos;
      }
      return [];
    } catch (error) {
      console.error('Error reading cities file:', error);
      throw new Error('Unable to fetch cities');
    }
  }
}
