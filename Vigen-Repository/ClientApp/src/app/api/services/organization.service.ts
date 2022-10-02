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

import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrganizationGet
   */
  static readonly ApiOrganizationGetPath = '/api/Organization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Organization>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Organization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Organization>> {

    return this.apiOrganizationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Organization>>) => r.body as Array<Organization>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Organization>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Organization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Organization>> {

    return this.apiOrganizationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Organization>>) => r.body as Array<Organization>)
    );
  }

  /**
   * Path part for operation apiOrganizationPost
   */
  static readonly ApiOrganizationPostPath = '/api/Organization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Organization
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationPostPath, 'post');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationPost$Plain(params?: {
    context?: HttpContext
    body?: Organization
  }
): Observable<Organization> {

    return this.apiOrganizationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationPost$Json$Response(params?: {
    context?: HttpContext
    body?: Organization
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationPostPath, 'post');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationPost$Json(params?: {
    context?: HttpContext
    body?: Organization
  }
): Observable<Organization> {

    return this.apiOrganizationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * Path part for operation apiOrganizationIdGet
   */
  static readonly ApiOrganizationIdGetPath = '/api/Organization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdGetPath, 'get');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Organization> {

    return this.apiOrganizationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdGetPath, 'get');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Organization> {

    return this.apiOrganizationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * Path part for operation apiOrganizationIdPut
   */
  static readonly ApiOrganizationIdPutPath = '/api/Organization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: Organization
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdPutPath, 'put');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: Organization
  }
): Observable<Organization> {

    return this.apiOrganizationIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: Organization
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdPutPath, 'put');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: Organization
  }
): Observable<Organization> {

    return this.apiOrganizationIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * Path part for operation apiOrganizationIdDelete
   */
  static readonly ApiOrganizationIdDeletePath = '/api/Organization/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Organization> {

    return this.apiOrganizationIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Organization>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiOrganizationIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Organization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Organization> {

    return this.apiOrganizationIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Organization>) => r.body as Organization)
    );
  }

}
