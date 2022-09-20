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

import { Oganization } from '../models/oganization';

@Injectable({
  providedIn: 'root',
})
export class OganizationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOganizationsGet
   */
  static readonly ApiOganizationsGetPath = '/api/Oganizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Oganization>>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Oganization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Oganization>> {

    return this.apiOganizationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Oganization>>) => r.body as Array<Oganization>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Oganization>>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Oganization>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Oganization>> {

    return this.apiOganizationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Oganization>>) => r.body as Array<Oganization>)
    );
  }

  /**
   * Path part for operation apiOganizationsPost
   */
  static readonly ApiOganizationsPostPath = '/api/Oganizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Oganization
  }
): Observable<StrictHttpResponse<Oganization>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsPostPath, 'post');
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
        return r as StrictHttpResponse<Oganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsPost$Plain(params?: {
    context?: HttpContext
    body?: Oganization
  }
): Observable<Oganization> {

    return this.apiOganizationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Oganization>) => r.body as Oganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsPost$Json$Response(params?: {
    context?: HttpContext
    body?: Oganization
  }
): Observable<StrictHttpResponse<Oganization>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsPostPath, 'post');
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
        return r as StrictHttpResponse<Oganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsPost$Json(params?: {
    context?: HttpContext
    body?: Oganization
  }
): Observable<Oganization> {

    return this.apiOganizationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Oganization>) => r.body as Oganization)
    );
  }

  /**
   * Path part for operation apiOganizationsIdGet
   */
  static readonly ApiOganizationsIdGetPath = '/api/Oganizations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Oganization>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsIdGetPath, 'get');
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
        return r as StrictHttpResponse<Oganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Oganization> {

    return this.apiOganizationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Oganization>) => r.body as Oganization)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Oganization>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsIdGetPath, 'get');
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
        return r as StrictHttpResponse<Oganization>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOganizationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Oganization> {

    return this.apiOganizationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Oganization>) => r.body as Oganization)
    );
  }

  /**
   * Path part for operation apiOganizationsIdPut
   */
  static readonly ApiOganizationsIdPutPath = '/api/Oganizations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: Oganization
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiOganizationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOganizationsIdPut(params: {
    id: string;
    context?: HttpContext
    body?: Oganization
  }
): Observable<void> {

    return this.apiOganizationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOganizationsIdDelete
   */
  static readonly ApiOganizationsIdDeletePath = '/api/Oganizations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOganizationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OganizationsService.ApiOganizationsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiOganizationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOganizationsIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiOganizationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
