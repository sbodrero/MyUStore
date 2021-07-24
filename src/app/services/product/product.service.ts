import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from "../../models/product/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:3000/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://127.0.0.1:3000/products/${id}`);
  }
}
