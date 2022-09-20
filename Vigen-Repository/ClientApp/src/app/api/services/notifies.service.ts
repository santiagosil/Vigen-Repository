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
export class NotifiesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNotifiesGet
   */
  static readonly ApiNotifiesGetPath = '/api/Notifies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Notify>>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Notify>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Notify>> {

    return this.apiNotifiesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notify>>) => r.body as Array<Notify>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Notify>>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Notify>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Notify>> {

    return this.apiNotifiesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notify>>) => r.body as Array<Notify>)
    );
  }

  /**
   * Path part for operation apiNotifiesPost
   */
  static readonly ApiNotifiesPostPath = '/api/Notifies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiNotifiesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesPost$Plain(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifiesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesPost$Json$Response(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiNotifiesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesPost$Json(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifiesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * Path part for operation apiNotifiesIdGet
   */
  static readonly ApiNotifiesIdGetPath = '/api/Notifies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesIdGetPath, 'get');
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
        return r as StrictHttpResponse<Notify>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifiesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesIdGetPath, 'get');
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
        return r as StrictHttpResponse<Notify>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifiesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * Path part for operation apiNotifiesIdPut
   */
  static readonly ApiNotifiesIdPutPath = '/api/Notifies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifiesIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Notify
  }
): Observable<void> {

    return this.apiNotifiesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiNotifiesIdDelete
   */
  static readonly ApiNotifiesIdDeletePath = '/api/Notifies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifiesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotifiesService.ApiNotifiesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotifiesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifiesIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiNotifiesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
