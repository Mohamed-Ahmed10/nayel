import { Component } from '@angular/core';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { SaleSectionComponent } from "./sale-section/sale-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroSectionComponent, SaleSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
