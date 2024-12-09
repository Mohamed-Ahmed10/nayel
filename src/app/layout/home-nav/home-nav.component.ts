import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHelperService } from '../../services/translate-helper.service';
import { CommonModule } from '@angular/common';
import { navItems } from '../../helpers/navItems';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit, OnDestroy {
  hoveredItem = '';
  navItems = navItems

  constructor(private translateHelper: TranslateHelperService) { }

  getSubItems(item: string) {
    const subItems = {
      fabric: [
        { name: 'cotton'},
        { name: 'silk' },
        { name: 'others'}
      ],
      makhawer: [
        { name: 'women' },
        { name: 'girls' },
        { name: 'kids' }
      ],
      internationalDesigns: [
        { name: 'western' },
        { name: 'eastern' },
        { name: 'asian' },
        { name: 'morocco' }
      ],
      abaya:[
        { name: 'abaya' },
        { name: 'scarves' }
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
