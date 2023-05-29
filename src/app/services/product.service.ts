import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDataModel } from '../models/responseDataModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://localhost:44335/api/products/';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ResponseDataModel<Product>> {
    return this.httpClient.get<ResponseDataModel<Product>>(this.url + 'getall');
  }

  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      this.url + 'getlistbycategory?categoryId=' + categoryId
    );
  }
}
