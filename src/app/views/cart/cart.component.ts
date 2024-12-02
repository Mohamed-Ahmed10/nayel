import { Component } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { Product } from '../../interfaces/interfaces';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: Product[] = [
    {
      image: '1',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
    },
    {
      image: '3',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
    },
    {
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
    },
    {
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
    },
  ]

}
