import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateHelperService } from '../../services/translate-helper.service';
import { TranslateModule } from '@ngx-translate/core';
import { navItems } from '../../helpers/navItems';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.scss'
})
export class HomeNavComponent implements OnInit, OnDestroy {
  navItems = navItems

  constructor(private translateHelper: TranslateHelperService) { }

  ngOnInit(): void {
    this.translateHelper.languageSubscribe()
  }

  ngOnDestroy(): void {
    if (this.translateHelper.langChangeSubscription) {
      this.translateHelper.langChangeSubscription.unsubscribe();
    }
  }


  onTranslateText(): void {
    this.translateHelper.translateText();
  }
}
