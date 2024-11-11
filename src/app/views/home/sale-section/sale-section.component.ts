import { Component } from '@angular/core';
import { Product } from '../../../helpers/interfaces';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-sale-section',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './sale-section.component.html',
  styleUrl: './sale-section.component.scss'
})
export class SaleSectionComponent {
  products: Product[] = [
    {
    image: '1',
    saleAmount: 13,
    name: 'Long Sleeve Stain Abaya',
    priceBefore: 230,
    priceAfter: 200
  },
  {
    image: '3',
    saleAmount: 13,
    name: 'Long Sleeve Stain Abaya',
    priceBefore: 230,
    priceAfter: 200
  },
  {
    image: '4',
    saleAmount: 13,
    name: 'Long Sleeve Stain Abaya',
    priceBefore: 230,
    priceAfter: 200
  },
  {
    image: '2',
    saleAmount: 13,
    name: 'Long Sleeve Stain Abaya',
    priceBefore: 230,
    priceAfter: 200
  },
]
}
