import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envirnoment } from '../../../Base/Environment';


@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _httpClient:HttpClient) { }

  allBrands():Observable<any>{
    return this._httpClient.get(`${Envirnoment.baseURL}/api/v1/brands`)
  }

  
}
