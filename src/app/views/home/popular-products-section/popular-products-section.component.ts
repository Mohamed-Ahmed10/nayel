import { Component } from '@angular/core';
import type { Product } from '../../../interfaces/interfaces';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-popular-products-section',
  standalone: true,
  imports: [ProductCardComponent, TranslateModule],
  templateUrl: './popular-products-section.component.html',
  styleUrls: ['./popular-products-section.component.scss']
})
export class PopularProductsSectionComponent {
  products: Product[] = [
    {
      id: '8374',
      image: '1',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '5291',
      image: '2',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '9463',
      image: '3',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '1857',
      image: '4',
      name: 'Long Sleeve Stain Abaya',
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
  ]
}
