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

import { Notify } from '../models/notify';

@Injectable({
  providedIn: 'root',
})
export class NotifyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNotifyGet
   */
  static readonly ApiNotifyGetPath = '/api/Notify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notify>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notify>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

}
