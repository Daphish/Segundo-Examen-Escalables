import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ListcardComponent } from "../listcard/listcard.component";
import { ProductsServicesService } from '../../services/products-services.service';
import { Product } from '../../interfaces/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listcomponent',
  standalone: true,
  imports: [ListcardComponent, NgFor],
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {

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
