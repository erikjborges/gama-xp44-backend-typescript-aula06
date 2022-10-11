"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayDatabase = void 0;
class ArrayDatabase {
    constructor() {
        this._data = {};
    }
    static getInstance() {
        if (!ArrayDatabase._instance) {
            ArrayDatabase._instance = new ArrayDatabase();
        }
        return ArrayDatabase._instance;
    }
    create(type, data) {
        let obj;
        if (this._data[type] === undefined) {
            this._data[type] = [];
        }
        data.indexId = this._data[type].length;
        obj = data;
        this._data[type].push(obj);
        return obj.indexId;
    }
    update(type, data) {
        let obj;
        obj = data;
        if (obj.indexId === undefined)
            return false;
        this._data[type][obj.indexId] = obj;
        return obj;
    }
    list(type) {
        let objs = [];
        if (this._data[type] === undefined) {
            return [];
        }
        for (let data of this._data[type])
            objs.push(data);
        return objs;
    }
    delete(type, dataId) {
        if (this._data[type] === undefined) {
            return false;
        }
        const indexId = this._data.findIndex((obj) => {
            return obj.indexId === dataId;
        });
        if (indexId === undefined)
            return false;
        this._data[type].splice(indexId, 1);
        return true;
    }
    read(type, dataId) {
        if (this._data[type] === undefined) {
            return undefined;
        }
        const data = this._data[type].find((obj) => {
            return obj.indexId === dataId;
        });
        if (!data)
            return false;
        return data;
    }
}
exports.ArrayDatabase = ArrayDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvYXJyYXkuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQzFCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNqRDtRQUVELE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxJQUFTO1FBQzFCLElBQUksR0FBUSxDQUFDO1FBRWIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxJQUFTO1FBQzFCLElBQUksR0FBUSxDQUFDO1FBRWIsR0FBRyxHQUFHLElBQUksQ0FBQztRQUVYLElBQUcsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVwQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWTtRQUNiLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUVyQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxLQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZLEVBQUUsTUFBYztRQUUvQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFDO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUMxQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBRyxPQUFPLEtBQUssU0FBUztZQUNwQixPQUFPLEtBQUssQ0FBQztRQUVqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsTUFBYztRQUU3QixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFDO1lBQzlCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBRyxDQUFDLElBQUk7WUFDSixPQUFPLEtBQUssQ0FBQztRQUVqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUExRkQsc0NBMEZDIn0=