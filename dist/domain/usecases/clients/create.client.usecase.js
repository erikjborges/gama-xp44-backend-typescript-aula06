"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repository_1 = __importDefault(require("../../../adapters/repositories/clients.repository"));
const viacepfactory_api_1 = require("../../../infrastructure/apis/cep/viacepfactory.api");
const apicepfactory_api_1 = require("../../../infrastructure/apis/cep/apicepfactory.api");
class CreateClientUseCase {
    constructor(_repository, _viaCep, _apiCep) {
        this._repository = _repository;
        this._viaCep = _viaCep;
        this._apiCep = _apiCep;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.endereco = yield this._viaCep.preencheEndereco(data.cep);
            if (!data.endereco) {
                data.endereco = yield this._apiCep.preencheEndereco(data.cep);
            }
            return yield this._repository.create(data);
        });
    }
}
exports.default = new CreateClientUseCase(clients_repository_1.default, new viacepfactory_api_1.ViaCepFactory(), new apicepfactory_api_1.ApiCepFactory());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNsaWVudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9jbGllbnRzL2NyZWF0ZS5jbGllbnQudXNlY2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDJHQUFrRjtBQUVsRiwwRkFBbUY7QUFDbkYsMEZBQW1GO0FBR25GLE1BQU0sbUJBQW1CO0lBRXJCLFlBQW9CLFdBQStCLEVBQVUsT0FBbUIsRUFBVSxPQUFtQjtRQUF6RixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUU3RyxDQUFDO0lBRUssT0FBTyxDQUFDLElBQWtCOztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUQsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxtQkFBbUIsQ0FDbEMsNEJBQWlCLEVBQ2pCLElBQUksaUNBQWEsRUFBRSxFQUNuQixJQUFJLGlDQUFhLEVBQUUsQ0FDdEIsQ0FBQyJ9