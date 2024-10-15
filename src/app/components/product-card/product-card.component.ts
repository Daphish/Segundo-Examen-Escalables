import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServicesService } from '../../services/products-services.service';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  private productsService = inject(ProductsServicesService);

  product: Product | undefined;
  id : number = 0;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.products.find(product => product.id === this.id);
  }

}
