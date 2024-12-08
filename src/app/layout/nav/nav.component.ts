import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHelperService } from '../../services/translate-helper.service';
import { CommonModule } from '@angular/common';
import { navItems } from '../../helpers/navItems';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,  TranslateModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  hoveredItem = '';
  navItems = navItems

  constructor(private translateHelper: TranslateHelperService) { }

  getSubItems(item: string) {
    const subItems = {
      products: [
        { name: 'abayas' },
        { name: 'dresses' },
        { name: 'accessories' }
      ],
      fabric: [
        { name: 'cotton' },
        { name: 'silk' },
        { name: 'others' }
      ],
      makhawer: [
        { name: 'women' },
        { name: 'girls' },
        { name: 'kids' }
      ],
      internationalDesigns: [
        { name: 'western' },
        { name: 'morocco' }
      ]
    };
    return subItems[item as keyof typeof subItems] || [];
  }

  hasDropdown(item: string): boolean {
    return this.getSubItems(item).length > 0;
  }

  onTranslateText(): void {
    this.translateHelper.translateText();
  }

  ngOnInit(): void {
    this.translateHelper.languageSubscribe();
  }

  ngOnDestroy(): void {
    if (this.translateHelper.langChangeSubscription) {
      this.translateHelper.langChangeSubscription.unsubscribe();
    }
  }
}
