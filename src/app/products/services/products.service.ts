import { environment } from './../../../environments/environment';
import { baseUrl } from './../../components/service/global.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  getAllProduct()
  {
     return  this.http.get( environment.baseUrl + 'products')
  };

  getAllCategories()
  {
    return this.http.get(environment.baseUrl + 'products/categories')
  };

  getProductsByCategory(keywords:string)
  {
    return this.http.get(environment.baseUrl + 'products/category/'+ keywords)
  };

  getProductById(id:any)
  {
    return this.http.get(environment.baseUrl + 'products/' + id)
  };

}
