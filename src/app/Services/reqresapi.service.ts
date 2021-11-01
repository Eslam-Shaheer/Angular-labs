import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reqresproduct } from '../Models/reqresproduct';
@Injectable({
  providedIn: 'root',
})
export class ReqresapiService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/product');
  }
}
