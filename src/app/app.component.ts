import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { TranslateHelperService } from './services/translate-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected to 'styleUrls'
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private translateHelper: TranslateHelperService) { }

  ngOnInit(): void {
    this.translateHelper.languageSubscribe();
  }

  ngOnDestroy(): void {
    this.translateHelper.langChangeSubscription?.unsubscribe();
  }

  get isRtl(): boolean {
    return this.translateHelper.isRtl;
  }
}