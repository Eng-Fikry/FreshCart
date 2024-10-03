import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envirnoment } from '../../../Base/Environment';


@Injectable({
  providedIn: 'root'
})
export class CategoService {

  constructor(private _httpClient:HttpClient) { }

  allCatego():Observable<any>{
    return this._httpClient.get(`${Envirnoment.baseURL}/api/v1/categories`)
  }

  
}