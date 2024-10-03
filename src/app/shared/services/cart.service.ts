import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envirnoment } from '../../Base/Environment';
import { Count } from '../interfaces/cart/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService    {

  
  
 

  constructor(private _httpClient:HttpClient) { }

  addProduct(pId:string):Observable<any>{
    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/cart`,{productId:pId})
  }


  updateQuantity(count:Count,pId:string):Observable<any>{
    return this._httpClient.put(`${Envirnoment.baseURL}/api/v1/cart/${pId}`,count)
  }

  userCart():Observable<any>{
    return this._httpClient.get(`${Envirnoment.baseURL}/api/v1/cart/`)
  }


  removeItem(pId:string):Observable<any>{
    return this._httpClient.delete(`${Envirnoment.baseURL}/api/v1/cart/${pId}`)
  }

  clearCart():Observable<any>{
    return this._httpClient.delete(`${Envirnoment.baseURL}/api/v1/cart/`)
  }


}
