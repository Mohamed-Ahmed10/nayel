import { Component } from '@angular/core';
import { HomeNavComponent } from "../../../layout/home-nav/home-nav.component";

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [HomeNavComponent],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss'
})
export class IntroSectionComponent {

}
