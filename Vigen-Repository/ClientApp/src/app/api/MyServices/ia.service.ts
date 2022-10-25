import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Poll } from "../models/poll";

@Injectable({
    providedIn:'root'
})
export class IaService{
    constructor(private http:HttpClient){

    }
    public getPredict(poll:Poll){
        return this.http.post(environment.urlIa,poll);
    }
    public getPrueba(){
        return this.http.get(environment.urlIa+"/pru");
    }
}