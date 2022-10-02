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

import { Site } from '../models/site';

@Injectable({
  providedIn: 'root',
})
export class SiteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSiteNitGet
   */
  static readonly ApiSiteNitGetPath = '/api/Site/{nit}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitGet$Plain$Response(params: {
    nit: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Site>>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitGetPath, 'get');
    if (params) {
      rb.path('nit', params.nit, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Site>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitGet$Plain(params: {
    nit: string;
    context?: HttpContext
  }
): Observable<Array<Site>> {

    return this.apiSiteNitGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Site>>) => r.body as Array<Site>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitGet$Json$Response(params: {
    nit: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Site>>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitGetPath, 'get');
    if (params) {
      rb.path('nit', params.nit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Site>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitGet$Json(params: {
    nit: string;
    context?: HttpContext
  }
): Observable<Array<Site>> {

    return this.apiSiteNitGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Site>>) => r.body as Array<Site>)
    );
  }

  /**
   * Path part for operation apiSiteNitIdGet
   */
  static readonly ApiSiteNitIdGetPath = '/api/Site/{nit}/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdGet$Plain$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdGetPath, 'get');
    if (params) {
      rb.path('nit', params.nit, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdGet$Plain(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<Site> {

    return this.apiSiteNitIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdGet$Json$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdGetPath, 'get');
    if (params) {
      rb.path('nit', params.nit, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdGet$Json(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<Site> {

    return this.apiSiteNitIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * Path part for operation apiSiteNitIdPut
   */
  static readonly ApiSiteNitIdPutPath = '/api/Site/{nit}/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSiteNitIdPut$Plain$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
    body?: Site
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdPutPath, 'put');
    if (params) {
      rb.path('nit', params.nit, {});
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
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSiteNitIdPut$Plain(params: {
    nit: string;
    id: string;
    context?: HttpContext
    body?: Site
  }
): Observable<Site> {

    return this.apiSiteNitIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSiteNitIdPut$Json$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
    body?: Site
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdPutPath, 'put');
    if (params) {
      rb.path('nit', params.nit, {});
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
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSiteNitIdPut$Json(params: {
    nit: string;
    id: string;
    context?: HttpContext
    body?: Site
  }
): Observable<Site> {

    return this.apiSiteNitIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * Path part for operation apiSiteNitIdDelete
   */
  static readonly ApiSiteNitIdDeletePath = '/api/Site/{nit}/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdDelete$Plain$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdDeletePath, 'delete');
    if (params) {
      rb.path('nit', params.nit, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdDelete$Plain(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<Site> {

    return this.apiSiteNitIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSiteNitIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdDelete$Json$Response(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSiteNitIdDeletePath, 'delete');
    if (params) {
      rb.path('nit', params.nit, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSiteNitIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSiteNitIdDelete$Json(params: {
    nit: string;
    id: string;
    context?: HttpContext
  }
): Observable<Site> {

    return this.apiSiteNitIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * Path part for operation apiSitePost
   */
  static readonly ApiSitePostPath = '/api/Site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSitePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSitePost$Plain$Response(params?: {
    context?: HttpContext
    body?: Site
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSitePostPath, 'post');
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
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSitePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSitePost$Plain(params?: {
    context?: HttpContext
    body?: Site
  }
): Observable<Site> {

    return this.apiSitePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSitePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSitePost$Json$Response(params?: {
    context?: HttpContext
    body?: Site
  }
): Observable<StrictHttpResponse<Site>> {

    const rb = new RequestBuilder(this.rootUrl, SiteService.ApiSitePostPath, 'post');
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
        return r as StrictHttpResponse<Site>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSitePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSitePost$Json(params?: {
    context?: HttpContext
    body?: Site
  }
): Observable<Site> {

    return this.apiSitePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Site>) => r.body as Site)
    );
  }

}
