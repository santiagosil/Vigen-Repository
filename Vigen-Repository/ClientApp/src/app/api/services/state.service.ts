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

import { State } from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class StateService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStateGet
   */
  static readonly ApiStateGetPath = '/api/State';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<State>>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<State>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<State>> {

    return this.apiStateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<State>>) => r.body as Array<State>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<State>>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<State>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<State>> {

    return this.apiStateGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<State>>) => r.body as Array<State>)
    );
  }

  /**
   * Path part for operation apiStatePost
   */
  static readonly ApiStatePostPath = '/api/State';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatePost$Plain$Response(params?: {
    context?: HttpContext
    body?: State
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStatePostPath, 'post');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatePost$Plain(params?: {
    context?: HttpContext
    body?: State
  }
): Observable<State> {

    return this.apiStatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatePost$Json$Response(params?: {
    context?: HttpContext
    body?: State
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStatePostPath, 'post');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatePost$Json(params?: {
    context?: HttpContext
    body?: State
  }
): Observable<State> {

    return this.apiStatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * Path part for operation apiStateIdGet
   */
  static readonly ApiStateIdGetPath = '/api/State/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdGetPath, 'get');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<State> {

    return this.apiStateIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdGetPath, 'get');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<State> {

    return this.apiStateIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * Path part for operation apiStateIdPut
   */
  static readonly ApiStateIdPutPath = '/api/State/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStateIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: State
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdPutPath, 'put');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStateIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: State
  }
): Observable<State> {

    return this.apiStateIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStateIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: State
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdPutPath, 'put');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStateIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: State
  }
): Observable<State> {

    return this.apiStateIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * Path part for operation apiStateIdDelete
   */
  static readonly ApiStateIdDeletePath = '/api/State/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<State> {

    return this.apiStateIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStateIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<State>> {

    const rb = new RequestBuilder(this.rootUrl, StateService.ApiStateIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<State>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStateIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStateIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<State> {

    return this.apiStateIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<State>) => r.body as State)
    );
  }

}
