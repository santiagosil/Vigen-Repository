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

import { ViolenceTypesOrganization } from '../models/violence-types-organization';

@Injectable({
  providedIn: 'root',
})
export class ViolenceTypeOrganizationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiViolenceTypeOrganizationGet
   */
  static readonly ApiViolenceTypeOrganizationGetPath = '/api/ViolenceTypeOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ViolenceTypesOrganization>>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ViolenceTypesOrganization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ViolenceTypesOrganization>> {

    return this.apiViolenceTypeOrganizationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ViolenceTypesOrganization>>) => r.body as Array<ViolenceTypesOrganization>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ViolenceTypesOrganization>>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ViolenceTypesOrganization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ViolenceTypesOrganization>> {

    return this.apiViolenceTypeOrganizationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ViolenceTypesOrganization>>) => r.body as Array<ViolenceTypesOrganization>)
    );
  }

  /**
   * Path part for operation apiViolenceTypeOrganizationPost
   */
  static readonly ApiViolenceTypeOrganizationPostPath = '/api/ViolenceTypeOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationPostPath, 'post');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationPost$Plain(params?: {
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationPost$Json$Response(params?: {
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationPostPath, 'post');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationPost$Json(params?: {
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * Path part for operation apiViolenceTypeOrganizationIdGet
   */
  static readonly ApiViolenceTypeOrganizationIdGetPath = '/api/ViolenceTypeOrganization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdGetPath, 'get');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdGetPath, 'get');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * Path part for operation apiViolenceTypeOrganizationIdPut
   */
  static readonly ApiViolenceTypeOrganizationIdPutPath = '/api/ViolenceTypeOrganization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdPutPath, 'put');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdPutPath, 'put');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiViolenceTypeOrganizationIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: ViolenceTypesOrganization
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * Path part for operation apiViolenceTypeOrganizationIdDelete
   */
  static readonly ApiViolenceTypeOrganizationIdDeletePath = '/api/ViolenceTypeOrganization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiViolenceTypeOrganizationIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ViolenceTypesOrganization>> {

    const rb = new RequestBuilder(this.rootUrl, ViolenceTypeOrganizationService.ApiViolenceTypeOrganizationIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<ViolenceTypesOrganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiViolenceTypeOrganizationIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiViolenceTypeOrganizationIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ViolenceTypesOrganization> {

    return this.apiViolenceTypeOrganizationIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ViolenceTypesOrganization>) => r.body as ViolenceTypesOrganization)
    );
  }

}
