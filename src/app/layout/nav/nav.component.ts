import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, OnDestroy {
  navItems = [
    { name: 'Fabric', link: 'products' },
    { name: 'Makhawer', link: 'makhawer' },
    { name: 'Abaya', link: 'abaya' },
    { name: 'Designers', link: 'designers' },
    { name: 'International Designs', link: 'international_designs' }
  ];
  currentLang: string | undefined;

  private langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getDefaultLang();
  }

  ngOnInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      console.log('Language changed to:', event.lang);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }


  translateText() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
  }
}
