import { Component } from '@angular/core';
import type { Product } from '../../../interfaces/interfaces';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";



@Component({
  selector: 'app-popular-products-section',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-products-section.component.html',
  styleUrl: './popular-products-section.component.scss'
})
export class PopularProductsSectionComponent {
  products: Product[] = [
    {
      image: '1',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '2',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '3',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '4',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
  ]
}
