import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    console.log('DataService')
  }

  getData$():Observable<any>{
    debugger;
    return of([])
  }
}
