import { Component } from '@angular/core';
import { Product } from '../../../interfaces/interfaces';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sale-section',
  standalone: true,
  imports: [ProductCardComponent, TranslateModule],
  templateUrl: './sale-section.component.html',
  styleUrls: ['./sale-section.component.scss']
})
export class SaleSectionComponent {
  products: Product[] = [
    {
      id: '7123',
      image: '1',
      saleAmount: 13,
      name: 'Long Sleeve Stain Abaya', 
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '4567',
      image: '3',
      saleAmount: 13,
      name: 'Long Sleeve Stain Abaya', 
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '2891',
      image: '4',
      saleAmount: 13,
      name: 'Long Sleeve Stain Abaya', 
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
    {
      id: '6345',
      image: '2',
      saleAmount: 13,
      name: 'Long Sleeve Stain Abaya', 
      arName: 'عباءة بأكمام طويلة مزخرفة',
      priceBefore: 230,
      priceAfter: 200
    },
  ]
}
