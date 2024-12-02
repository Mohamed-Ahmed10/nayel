import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateHelperService {
  currentLang: string | undefined;
  isRtl: boolean = false;
  langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.getDefaultLang();
    this.updateDirection();
  }

  languageSubscribe() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      this.updateDirection();
    });
  }

  translateText() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
  }

  private updateDirection(): void {
    this.isRtl = this.currentLang === 'ar';
  }
}