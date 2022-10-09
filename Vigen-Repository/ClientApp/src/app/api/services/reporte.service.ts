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
   * Path part for operation apiReporteReportePruebaGet
   */
  static readonly ApiReporteReportePruebaGetPath = '/api/Reporte/reportePrueba';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteReportePruebaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteReportePruebaGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteReportePruebaGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiReporteReportePruebaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteReportePruebaGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteReportePruebaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReporteReportePruebaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteReportePruebaGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<JsonResult>> {

    const rb = new RequestBuilder(this.rootUrl, ReporteService.ApiReporteReportePruebaGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiReporteReportePruebaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReporteReportePruebaGet$Json(params?: {
    context?: HttpContext
  }
): Observable<JsonResult> {

    return this.apiReporteReportePruebaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<JsonResult>) => r.body as JsonResult)
    );
  }

}
