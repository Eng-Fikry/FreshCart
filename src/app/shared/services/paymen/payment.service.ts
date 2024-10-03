import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envirnoment } from '../../../Base/Environment';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  

  constructor(private _httpClient:HttpClient) { }

  chekOut(cID:string,data:string):Observable<any>{

    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/orders/checkout-session/${cID}?url=http://localhost:4200`,{shippingAddress:data})

  }
}
