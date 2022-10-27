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
    return this.http.post<Notify>(this.rootUrl+"/api/Notify",notify);
  }
  public getNotifies(){
    return this.http.get<Notify[]>(this.rootUrl+"/api/notify");
  }
  public deleteNotify(id:number){
    return this.http.delete<Notify>(this.rootUrl+'/api/notify/'+String(id));
  }
  public putNotify(id:number,notify:Notify){
    return this.http.put<Notify>(this.rootUrl+'/api/notify/'+String(id),notify);
  }
}