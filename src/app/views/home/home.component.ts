import { Component } from '@angular/core';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { SaleSectionComponent } from "./sale-section/sale-section.component";
import { CategoriesSectionComponent } from "./categories-section/categories-section.component";
import { PopularProductsSectionComponent } from "./popular-products-section/popular-products-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroSectionComponent, SaleSectionComponent, CategoriesSectionComponent, PopularProductsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
