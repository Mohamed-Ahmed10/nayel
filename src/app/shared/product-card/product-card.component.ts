import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHelperService } from '../../services/translate-helper.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  host: {
    ngSkipHydration: 'true'
  }
})
export class ProductCardComponent {
  @Input() product!: Product;
  translateHelper = inject(TranslateHelperService);
}
