import { baseUrl } from './../../components/service/global.service';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private HttpClient:HttpClient) { };

  createNewCart(model :any)
  {
    return this.HttpClient.post(environment.baseUrl + 'carts' , model)
  };
   
  getAllCarts(param?:any)
  {
    let params = new HttpParams();
    params = params.append('startDate' , param?.start).append('endDate', param?.end);
    return this.HttpClient.get(environment.baseUrl + 'carts' , {params})
  };

};
