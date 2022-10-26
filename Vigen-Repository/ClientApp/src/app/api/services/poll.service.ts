import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base-service";
import {Injectable} from '@angular/core';
import { ApiConfiguration } from "../api-configuration";
import { Poll } from "../models/poll";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PollService extends BaseService{
    constructor(http:HttpClient, config:ApiConfiguration){
        super(config,http);
    }
    postPoll(poll:Poll):Observable<Poll>{
        return this.http.post<Poll>(this.rootUrl+"/api/poll",poll);
    }
    getPolls():Observable<Poll[]>{
        return this.http.get<Poll[]>(this.rootUrl+"/api/poll");
    }

}