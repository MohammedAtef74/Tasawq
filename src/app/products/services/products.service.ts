import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/components/service/global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http:HttpClient ) { }

  getAllProduct()
  {
     return  this.http.get( baseUrl + 'products')
  };

  getAllCategories()
  {
    return this.http.get(baseUrl + 'products/categories')
  };

  getProductsByCategory(keywords:string)
  {
    return this.http.get(baseUrl + 'products/category/'+ keywords)
  };

  getProductById(id:any)
  {
    return this.http.get(baseUrl + 'products/' + id)
  };

  createProduct(model:any)
  {
    return this.http.post(baseUrl + 'products/' , model)
  };

  updateProduct(id:any)
  {
    return this.http.put(baseUrl + 'products/' , id)
  };


};
