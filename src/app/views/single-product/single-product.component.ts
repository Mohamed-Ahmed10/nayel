import { Component } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {

}
