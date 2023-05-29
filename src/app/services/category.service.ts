import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { ResponseDataModel } from '../models/responseDataModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string = 'https://localhost:44335/api/categories/';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url + 'getall');
  }
  add(category: Category) {
    return this.httpClient.post(this.url + 'add', category);
  }
}
