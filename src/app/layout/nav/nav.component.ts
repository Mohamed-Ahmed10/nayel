import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavServiceService } from '../../services/nav-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public navService: NavServiceService) { }

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
