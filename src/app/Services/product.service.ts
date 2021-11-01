import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { Category } from 'src/app/Models/category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  prdoductsList: Product[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      environment.Api + 'product',
      product,
      this.httpOptions
    );
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.Api + 'product');
  }
  getProductsByCatID(catID: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.Api + 'product?CategoryID=' + catID
    );
  }
  getProductByID(pID: number): Observable<Product> {
    return this.http.get<Product>(environment.Api + 'product/' + pID);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.Api + 'category');
  }
}
