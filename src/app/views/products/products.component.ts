import { Component } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { Product } from '../../interfaces/interfaces';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, RouterLink, TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
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
      image: '2',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
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
      image: '2',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
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
      image: '2',
      saleAmount: -13,
      name: 'Long Sleeve Stain Abaya',
      priceBefore: 230,
      priceAfter: 200
    },
  ]
}
