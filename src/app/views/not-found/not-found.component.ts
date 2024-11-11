import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../../layout/nav/nav.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, NavComponent,NavComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
