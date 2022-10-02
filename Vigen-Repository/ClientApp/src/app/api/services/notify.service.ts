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
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Notify>>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiNotifyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Notify>> {

    return this.apiNotifyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notify>>) => r.body as Array<Notify>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Notify>>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiNotifyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Notify>> {

    return this.apiNotifyGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notify>>) => r.body as Array<Notify>)
    );
  }

  /**
   * Path part for operation apiNotifyPost
   */
  static readonly ApiNotifyPostPath = '/api/Notify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotifyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyPost$Plain(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifyPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyPost$Json$Response(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiNotifyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyPost$Json(params?: {
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * Path part for operation apiNotifyIdGet
   */
  static readonly ApiNotifyIdGetPath = '/api/Notify/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiNotifyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiNotifyIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * Path part for operation apiNotifyIdPut
   */
  static readonly ApiNotifyIdPutPath = '/api/Notify/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiNotifyIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifyIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: Notify
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiNotifyIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotifyIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: Notify
  }
): Observable<Notify> {

    return this.apiNotifyIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * Path part for operation apiNotifyIdDelete
   */
  static readonly ApiNotifyIdDeletePath = '/api/Notify/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiNotifyIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotifyIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Notify>> {

    const rb = new RequestBuilder(this.rootUrl, NotifyService.ApiNotifyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiNotifyIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotifyIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Notify> {

    return this.apiNotifyIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notify>) => r.body as Notify)
    );
  }

}
