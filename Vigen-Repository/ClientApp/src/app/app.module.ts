import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { PanelEstadisticaComponent } from './panel-estadistica/panel-estadistica.component';
=======
import { SideComponent } from './side/side.component';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RecordOrgComponent } from './record-org/record-org.component';
import { RecordUserComponent } from './record-user/record-user.component';
>>>>>>> af99e8c37138d5541dd65c1118670016bf2b304a

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translate/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
<<<<<<< HEAD
    HomeComponent,
    PanelEstadisticaComponent
=======
    SideComponent,
    PanelUserComponent,
    EditUserComponent,
    RecordOrgComponent,
    RecordUserComponent
>>>>>>> af99e8c37138d5541dd65c1118670016bf2b304a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
