import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RouterModule } from '@angular/router';
import { SingUpComponent } from './sign-up/sing-up.component';
import { MapOrganizacionComponent } from './map-organizacion/map-organizacion.component';
import { FAQComponent } from './faq/faq.component';

import { TokenComponent } from './token/token.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NotifyComponent } from './notify/notify.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PanelOrgComponent } from './panel-org/panel-org.component';
import { FooterComponent } from './footer/footer.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { EditOrgComponent } from './edit-org/edit-org.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PollStadisticsComponent } from './poll-stadistics/poll-stadistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NotifyStadisticsComponent } from './notify-stadistics/notify-stadistics.component';
import { SitesComponent } from './sites/sites.component';

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
    LoginComponent,
    SingUpComponent,
    MapOrganizacionComponent,
    FAQComponent,
    TokenComponent,
    ReportesComponent,
    NotifyComponent,
    PanelOrgComponent,
    FooterComponent,
    EncuestaComponent,
    AcercaDeComponent,
    EditOrgComponent,
    AyudaComponent,
    EstadisticasComponent,
    PollStadisticsComponent,
    NotifyStadisticsComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,    
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
