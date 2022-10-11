import { IDatabase } from "../../infrastructure/persistence/database.interface";
import { ClientEntity } from "../../domain/entities/clients/client.entity"
import { ArrayDatabase } from "../../infrastructure/persistence/array.database";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";

class ClientsRepository implements IClientsRepository {
    private _type: string = 'client';

    constructor(private _database: IDatabase){

    }

    async readById(resourceId: number): Promise<ClientEntity | undefined> {
        return this._database.read(this._type, resourceId);
    }

    async create(resource: ClientEntity): Promise<ClientEntity> {

        // resource.endereco = await this._viaCep.preencheEndereco(resource.cep);
        
        // if(!resource.endereco){
        //     resource.endereco = await this._apiCep.preencheEndereco(resource.cep);
        // }

        resource.indexId = this._database.create(this._type, resource);
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.create(this._type, resourceId);
    }

    async list(): Promise<ClientEntity[]> {
        return this._database.list(this._type);
    }

    async updateById(resource: ClientEntity): Promise<ClientEntity | undefined> {
        this._database.update(this._type, resource);
        return resource;
    }
}

export default new ClientsRepository(
    ArrayDatabase.getInstance()
    );