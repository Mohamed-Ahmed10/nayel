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
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[] = [
    {
      id: '4321',
      image: '1',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '8765',
      image: '3',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '2109',
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '6543',
      image: '2',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    }
  ]

}
