import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  constructor(public translate: TranslateService){
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');
  }
  changeLang(lang: string){
    this.translate.use(lang);
  }
  //export TranslateService translate;
}
