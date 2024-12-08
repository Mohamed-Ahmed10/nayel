import { Component, signal } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { Product } from '../../interfaces/interfaces';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [NavComponent, ProductCardComponent,TranslateModule],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  numOfProducts = signal<number>(0)
  products: Product[] = [
    {
      id: '9876',
      image: '1',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '5432',
      image: '3',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '1098',
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '7654',
      image: '4',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
  ]

  increase() {
    this.numOfProducts.update(cur => cur + 1)
  }
  decrease() {
    if (this.numOfProducts() > 0) this.numOfProducts.update(cur => cur - 1)
  }
}
