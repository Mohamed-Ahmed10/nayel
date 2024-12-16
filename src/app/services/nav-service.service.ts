import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { TranslateHelperService } from './translate-helper.service';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService implements OnInit, OnDestroy {
  items = {
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
    abaya: [
      { name: 'abaya' },
      { name: 'scarves' }
    ],
    gulfDesigns: [],
    internationalDesigns: [
      { name: 'western' },
      { name: 'eastern' },
      { name: 'asian' },
      { name: 'morocco' }
    ]
  };
  navItems = Object.keys(this.items);

  constructor(private translateHelper: TranslateHelperService) {}


  getSubItems(item: string) {
    return this.items[item as keyof typeof this.items] || [];
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
