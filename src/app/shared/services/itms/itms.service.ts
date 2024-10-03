import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItmsService {

  number:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor() { }
}
