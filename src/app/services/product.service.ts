import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../vm/vm.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/products');
  }
}
