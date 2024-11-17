import { Component } from '@angular/core';
import { HomeNavComponent } from "../../../layout/home-nav/home-nav.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [HomeNavComponent, TranslateModule],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss'
})
export class IntroSectionComponent {

}
