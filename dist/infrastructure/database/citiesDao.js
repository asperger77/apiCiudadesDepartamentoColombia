"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesDao = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class CitiesDao {
    constructor() {
        this.filePath = path_1.default.join(__dirname, '../../../data/ciudades.json');
    }
    async getAllCities() {
        try {
            const data = await promises_1.default.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        }
        catch (error) {
            console.error('Error reading cities file:', error);
            throw new Error('Unable to fetch cities');
        }
    }
}
exports.CitiesDao = CitiesDao;
