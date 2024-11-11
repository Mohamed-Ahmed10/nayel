import { Component } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { Product } from '../../helpers/interfaces';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavComponent, ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: Product[] = [
    {
      image: '1',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '3',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
  ]

}
