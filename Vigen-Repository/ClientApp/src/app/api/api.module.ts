/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { NotifyService } from './services/notify.service';
import { OrganizationService } from './services/organization.service';
import { OrganizationTypeService } from './services/organization-type.service';
import { SiteService } from './services/site.service';
import { StateService } from './services/state.service';
import { UserService } from './services/user.service';
import { ViolenceTypeService } from './services/violence-type.service';
import { ViolenceTypeOrganizationService } from './services/violence-type-organization.service';
import { ReportesComponent } from './services/reportes/reportes.component';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [
    ReportesComponent
  ],
  providers: [
    NotifyService,
    OrganizationService,
    OrganizationTypeService,
    SiteService,
    StateService,
    UserService,
    ViolenceTypeService,
    ViolenceTypeOrganizationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
