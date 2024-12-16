import { TranslateHelperService } from './../../services/translate-helper.service';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  appName = environment.appName;

  translateHelperService = inject(TranslateHelperService);

  get isRtl(): boolean {
    return this.translateHelperService.isRtl
  }

}
