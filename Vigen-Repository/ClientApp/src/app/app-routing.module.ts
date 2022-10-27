import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RecordOrgComponent } from './record-org/record-org.component';
import { RecordUserComponent } from './record-user/record-user.component';
import { LoginComponent } from './login/login.component';
import { SideComponent } from './side/side.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { SingUpComponent } from './sign-up/sing-up.component';
import { FAQComponent } from './faq/faq.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PanelOrgComponent } from './panel-org/panel-org.component';
import { EditOrgComponent } from './edit-org/edit-org.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PollStadisticsComponent } from './poll-stadistics/poll-stadistics.component';
import { NotifyStadisticsComponent } from './notify-stadistics/notify-stadistics.component';
import { SitesComponent } from './sites/sites.component';


const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,},
  {path: 'side', component: SideComponent},
  {path: 'rdUser', component: RecordUserComponent},
  {path: 'rdOrg', component: RecordOrgComponent},
  {path: 'edUser',component: EditUserComponent},
  {path: 'pUser', component: PanelUserComponent},
  {path: 'statis',component: StatisticsDashboardComponent},
  {path: 'signUp',component: SingUpComponent},
  {path: 'faq',component:FAQComponent},
  {path: 'aboutUs',component:AcercaDeComponent},
  {path: 'pOrg', component:PanelOrgComponent},
  {path: 'encuesta',component:EncuestaComponent},
  {path: 'edOrg',component:EditOrgComponent},
  {path: 'ayuda',component:AyudaComponent},
  {path: 'pollStadistics',component:PollStadisticsComponent},
  {path: 'notifyStadistics',component:NotifyStadisticsComponent},
  {path: 'sites',component:SitesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
