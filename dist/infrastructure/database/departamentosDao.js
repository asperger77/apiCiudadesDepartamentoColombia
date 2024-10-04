"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentosDao = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class DepartamentosDao {
    constructor() {
        this.filePath = path_1.default.join(__dirname, '../../../data/ciudades.json');
    }
    async getAllDepartamentos() {
        try {
            console.log('getAllDepartamentos');
            const data = await promises_1.default.readFile(this.filePath, 'utf-8');
            const dataDeparmentos = JSON.parse(data);
            if (Array.isArray(dataDeparmentos)) {
                // Agrupamos los departamentos y eliminamos duplicados
                const departamentosUnicos = [...new Set(dataDeparmentos.map((item) => item.departamento))];
                // Mapeamos los departamentos únicos a la estructura que sigue la interfaz Departamentos
                const departamentos = departamentosUnicos.map((depto) => {
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
        }
        catch (error) {
            console.error('Error reading cities file:', error);
            throw new Error('Unable to fetch cities');
        }
    }
}
exports.DepartamentosDao = DepartamentosDao;
