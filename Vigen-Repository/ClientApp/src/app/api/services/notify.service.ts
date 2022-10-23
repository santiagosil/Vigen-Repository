import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../api-configuration';
import {BaseService} from '../base-service';
import { Notify } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotifyService extends BaseService{
  constructor(http: HttpClient, config: ApiConfiguration){super(config,http)}

  public postNotify(notify: Notify){
    return this.http.post(this.rootUrl+"/api/Notify",notify);
  }
}