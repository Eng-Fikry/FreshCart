import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envirnoment } from '../../Base/Environment';
HttpClient

HttpClientModule

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }



  allProdeuctsApi():Observable<any>{
    return this._httpClient.get(`${Envirnoment.baseURL}/api/v1/products`)
  }

  specProdeuctApi(id:string|null):Observable<any>{
    return this._httpClient.get(`${Envirnoment.baseURL}/api/v1/products/${id}`)
  }

}
