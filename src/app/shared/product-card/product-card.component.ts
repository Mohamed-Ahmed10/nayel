import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHelperService } from '../../services/translate-helper.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  translateHelper = inject(TranslateHelperService)

}
