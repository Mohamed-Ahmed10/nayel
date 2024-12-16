import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavServiceService } from '../../services/nav-service.service';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss','../nav/nav.component.scss']
})
export class HomeNavComponent {
  constructor(public navService: NavServiceService) {}

  hoveredItem = ''

  onTranslateText() {
    this.navService.onTranslateText();
  }

  hasDropdown(item: string) {
    return this.navService.hasDropdown(item);
  }

  getNavItems() {
    return this.navService.navItems;
  }

  getSubItems(item: string) {
    return this.navService.getSubItems(item);
  }

}
