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

import { ViolenceType } from '../models/violence-type';

@Injectable({
  providedIn: 'root',
})
export class ViolenceTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiViolenceTypeGet
   */
  static readonly ApiViolenceTypeGetPath = '/api/ViolenceType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ViolenceType>>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ViolenceType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ViolenceType>> {

    return this.apiViolenceTypeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ViolenceType>>) => r.body as Array<ViolenceType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ViolenceType>>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ViolenceType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ViolenceType>> {

    return this.apiViolenceTypeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ViolenceType>>) => r.body as Array<ViolenceType>)
    );
  }

  /**
   * Path part for operation apiViolenceTypePost
   */
  static readonly ApiViolenceTypePostPath = '/api/ViolenceType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypePost$Plain$Response(params?: {
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypePostPath, 'post');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypePost$Plain(params?: {
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypePost$Json$Response(params?: {
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypePostPath, 'post');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypePost$Json(params?: {
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * Path part for operation apiViolenceTypeIdGet
   */
  static readonly ApiViolenceTypeIdGetPath = '/api/ViolenceType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdGetPath, 'get');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdGetPath, 'get');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * Path part for operation apiViolenceTypeIdPut
   */
  static readonly ApiViolenceTypeIdPutPath = '/api/ViolenceType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdPutPath, 'put');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdPutPath, 'put');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceType
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * Path part for operation apiViolenceTypeIdDelete
   */
  static readonly ApiViolenceTypeIdDeletePath = '/api/ViolenceType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceType>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeService.ApiViolenceTypeIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<ViolenceType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceType> {

    return this.apiViolenceTypeIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceType>) => r.body as ViolenceType)
    );
  }

}
