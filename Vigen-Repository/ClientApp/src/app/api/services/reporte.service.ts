/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { JsonResult } from '../models/json-result';

@Injectable({
  providedIn: 'root',
})
export class ReporteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiReportePruebaGet
   */
  static readonly ApiReportePruebaGetPath = '/api/Reporte/Prueba';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportePruebaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportePruebaGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReportePruebaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReportePruebaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportePruebaGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReportePruebaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportePruebaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportePruebaGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReportePruebaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReportePruebaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportePruebaGet$Json(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReportePruebaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * Path part for operation apiReporteUsuariosGet
   */
  static readonly ApiReporteUsuariosGetPath = '/api/Reporte/Usuarios';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteUsuariosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteUsuariosGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteUsuariosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteUsuariosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteUsuariosGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteUsuariosGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteUsuariosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteUsuariosGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteUsuariosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteUsuariosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteUsuariosGet$Json(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteUsuariosGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * Path part for operation apiReporteOrganizationGet
   */
  static readonly ApiReporteOrganizationGetPath = '/api/Reporte/Organization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteOrganizationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteOrganizationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteOrganizationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteOrganizationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteOrganizationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteOrganizationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteOrganizationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteOrganizationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteOrganizationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteOrganizationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * Path part for operation apiReporteNotifiesServicedIdGet
   */
  static readonly ApiReporteNotifiesServicedIdGetPath = '/api/Reporte/NotifiesServiced/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteNotifiesServicedIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteNotifiesServicedIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteNotifiesServicedIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteNotifiesServicedIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteNotifiesServicedIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteNotifiesServicedIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteNotifiesServicedIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteNotifiesServicedIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteNotifiesServicedIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JsonResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReporteNotifiesServicedIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteNotifiesServicedIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteNotifiesServicedIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

}
