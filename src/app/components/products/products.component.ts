import { Component, inject, EventEmitter, Output } from '@angular/core';
import { GeneralcardComponent } from "../generalcard/generalcard.component";
import { ProductsServicesService } from '../../services/products-services.service';
import { Product } from '../../interfaces/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [GeneralcardComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  private productsService = inject(ProductsServicesService);

  @Output()
    public chargeData : EventEmitter<Product> = new EventEmitter;

  constructor(){
    this.productsService.fetchProducts();
  }

  public get products(): Product[]{
    return this.productsService.products;
  }

}
