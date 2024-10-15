import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-generalcard',
  standalone: true,
  imports: [],
  templateUrl: './generalcard.component.html',
  styleUrl: './generalcard.component.css'
})
export class GeneralcardComponent {

  @Input()
  public product: Product= {
    description: "",
    image: "",
    id: 0,
    title: "",
    price: 0,
    category: "",
  };
}
