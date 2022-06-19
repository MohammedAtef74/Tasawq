import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private HttpClient:HttpClient) { };

  createNewCart(model :any)
  {
    return this.HttpClient.post(environment.baseUrl + 'carts' , model)
  }


}
