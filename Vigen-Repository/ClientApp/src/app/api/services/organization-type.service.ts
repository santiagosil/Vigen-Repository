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

import { OrganizationType } from '../models/organization-type';

@Injectable({
  providedIn: 'root',
})
export class OrganizationTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrganizationTypeGet
   */
  static readonly ApiOrganizationTypeGetPath = '/api/OrganizationType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrganizationType>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrganizationType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<OrganizationType>> {

    return this.apiOrganizationTypeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrganizationType>>) => r.body as Array<OrganizationType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OrganizationType>>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrganizationType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<OrganizationType>> {

    return this.apiOrganizationTypeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OrganizationType>>) => r.body as Array<OrganizationType>)
    );
  }

  /**
   * Path part for operation apiOrganizationTypePost
   */
  static readonly ApiOrganizationTypePostPath = '/api/OrganizationType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypePost$Plain$Response(params?: {
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypePostPath, 'post');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypePost$Plain(params?: {
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypePost$Json$Response(params?: {
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypePostPath, 'post');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypePost$Json(params?: {
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * Path part for operation apiOrganizationTypeIdGet
   */
  static readonly ApiOrganizationTypeIdGetPath = '/api/OrganizationType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdGetPath, 'get');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdGetPath, 'get');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * Path part for operation apiOrganizationTypeIdPut
   */
  static readonly ApiOrganizationTypeIdPutPath = '/api/OrganizationType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypeIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdPutPath, 'put');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypeIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypeIdPut$Json$Response(params: {
    id: string;
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdPutPath, 'put');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrganizationTypeIdPut$Json(params: {
    id: string;
    context?: HttpContext
    body?: OrganizationType
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * Path part for operation apiOrganizationTypeIdDelete
   */
  static readonly ApiOrganizationTypeIdDeletePath = '/api/OrganizationType/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdDelete$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdDelete$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrganizationTypeIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdDelete$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<OrganizationType>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationTypeService.ApiOrganizationTypeIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<OrganizationType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrganizationTypeIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrganizationTypeIdDelete$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<OrganizationType> {

    return this.apiOrganizationTypeIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<OrganizationType>) => r.body as OrganizationType)
    );
  }

}
