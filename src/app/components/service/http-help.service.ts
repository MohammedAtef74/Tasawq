import { baseUrl } from './global.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelpersService 
{
    constructor(private _HttpClient:HttpClient ) { }

    get(endPoint : string ):Observable <any>
    {
        return this._HttpClient.get(baseUrl + endPoint)
    };
    
  
 
}