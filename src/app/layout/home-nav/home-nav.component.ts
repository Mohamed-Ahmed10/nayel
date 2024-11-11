import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.scss'
})
export class HomeNavComponent {
  navItems = [
    { name: 'Fabric', link: 'products' },
    { name: 'Makhawer', link: 'makhawer' },
    { name: 'Abaya', link: 'abaya' },
    { name: 'Designers', link: 'designers' },
    { name: 'International Designs', link: 'international_designs' }
  ];
}
