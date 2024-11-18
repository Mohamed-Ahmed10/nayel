import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../../layout/nav/nav.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, NavComponent, NavComponent, TranslateModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
