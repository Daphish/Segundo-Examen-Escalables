import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-listcard',
  standalone: true,
  imports: [],
  templateUrl: './listcard.component.html',
  styleUrl: './listcard.component.css'
})
export class ListcardComponent {

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
