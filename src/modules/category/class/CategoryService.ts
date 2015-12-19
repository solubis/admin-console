import {Service, Inject} from 'angular-components';
import {Record} from '../../server/class/Record';

@Service()
class CategoryService {
    private baseURL: string;

    constructor(
        @Inject('$http') private http,
        @Inject('configuration') config) {

        this.baseURL = `${config.restURL}/categories`;
    }

    find(): Promise<Record[]> {
        return this.http.get(`${this.baseURL}`).then((result) => {
            return result.data;
        });
    }

    create(data): Promise<Record> {
        return this.http.post(`${this.baseURL}`, data).then((result) => {
            return result.data;
        });
    }

    upsert(data): Promise<Record> {
        return this.http.put(`${this.baseURL}`, data).then((result) => {
            return result.data;
        });
    }

    truncate(): Promise<Record> {
        return this.http.get(`${this.baseURL}/truncate`).then((result) => {
            return result.data;
        });
    }

    remove(id): Promise<Record> {
        return this.http.delete(`${this.baseURL}/${id}`).then((result) => {
            return result.data;
        });
    }
}

export {Record, CategoryService}
