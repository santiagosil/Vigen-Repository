import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RecordOrgComponent } from './record-org/record-org.component';
import { RecordUserComponent } from './record-user/record-user.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { LoginComponent } from './login/login.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/translate/','.json')
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    PanelUserComponent,
    EditUserComponent,
    RecordOrgComponent,
    RecordUserComponent,
    MapComponent,
    HomeComponent,
    StatisticsDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
