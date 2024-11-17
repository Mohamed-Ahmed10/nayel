import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateHelperService } from '../../services/translate-helper.service';
import { navItems } from '../../helpers/navItems';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, OnDestroy {
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
