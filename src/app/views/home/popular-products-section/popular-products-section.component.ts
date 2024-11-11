import { Component } from '@angular/core';
import type { Product } from '../../../helpers/interfaces';



@Component({
  selector: 'app-popular-products-section',
  standalone: true,
  imports: [],
  templateUrl: './popular-products-section.component.html',
  styleUrl: './popular-products-section.component.scss'
})
export class PopularProductsSectionComponent {
  products: Product[] = [
    {
    image: '1',
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
]
}
