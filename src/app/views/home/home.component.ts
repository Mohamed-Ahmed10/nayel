import { Component } from '@angular/core';
import { HomeNavComponent } from "../../layout/home-nav/home-nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeNavComponent,HomeNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
