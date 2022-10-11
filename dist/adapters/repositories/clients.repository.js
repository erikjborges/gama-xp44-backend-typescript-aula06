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
Object.defineProperty(exports, "__esModule", { value: true });
const array_database_1 = require("../../infrastructure/persistence/array.database");
class ClientsRepository {
    constructor(_database) {
        this._database = _database;
        this._type = 'client';
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.read(this._type, resourceId);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            // resource.endereco = await this._viaCep.preencheEndereco(resource.cep);
            // if(!resource.endereco){
            //     resource.endereco = await this._apiCep.preencheEndereco(resource.cep);
            // }
            resource.indexId = this._database.create(this._type, resource);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.create(this._type, resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.list(this._type);
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.update(this._type, resource);
            return resource;
        });
    }
}
exports.default = new ClientsRepository(array_database_1.ArrayDatabase.getInstance());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9jbGllbnRzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxvRkFBZ0Y7QUFHaEYsTUFBTSxpQkFBaUI7SUFHbkIsWUFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUZoQyxVQUFLLEdBQVcsUUFBUSxDQUFDO0lBSWpDLENBQUM7SUFFSyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBc0I7O1lBRS9CLHlFQUF5RTtZQUV6RSwwQkFBMEI7WUFDMUIsNkVBQTZFO1lBQzdFLElBQUk7WUFFSixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFVBQWtCOztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQXNCOztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsQ0FDaEMsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDMUIsQ0FBQyJ9