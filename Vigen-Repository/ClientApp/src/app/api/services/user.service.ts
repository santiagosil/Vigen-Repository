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

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserGet
   */
  static readonly ApiUserGetPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetPath, 'get');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<User> {

    return this.apiUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetPath, 'get');
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
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<User> {

    return this.apiUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

}
