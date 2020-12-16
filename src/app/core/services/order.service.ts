import {Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import {ApiService} from './api.service';


@Injectable()

export class OrderService {


    constructor(
        private apiService: ApiService,


    ) {
    }
    getOrder(id: number){
        return  this.apiService.get(`/orders/${id}`);
    }

    updateStatusOrderDB(id: number, statusOrder: number): Observable<any>{
        return  this.apiService.put(`/orders/${id}`, {status: statusOrder});
    }

    getOrdersIds(orderIds: Array<number>, exp: boolean){
        return this.apiService.post(`/orders/by-id`, {ids: orderIds, expired: exp});
    }



}
