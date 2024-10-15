import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products"

  private _products: Product[] = [];

  public get products(): Product[]{
    return this._products;
  }

  public fetchProducts(){
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response)=>{
        console.log(response);
        this._products = response;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
