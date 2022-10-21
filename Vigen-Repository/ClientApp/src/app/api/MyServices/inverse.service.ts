import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
import { RecordUserComponent } from 'src/app/record-user/record-user.component';

@Injectable({
  providedIn: 'root'
})
export class InverseService {

  constructor(private http : HttpClient) { 
  }

  public dir = {
    direct : ""
  }

  public async inverse(lat:string, long:string){
    var url:string;
    var direc : string[];
    var latitud : any;
    var longitud: any;
    latitud = lat;
    longitud = long;
    url="https://nominatim.openstreetmap.org/reverse?format=json&lat="+latitud+"&lon="+longitud+"&zoom=18&addressdetails=1"
    await this.http.get(url)
   .subscribe(data => {
    direc = Object.values(data);
    this.dir.direct = direc[6];
    console.log(this.dir.direct);
    });
    return this.dir.direct;
   }

   public async inverse1(lat:string, long:string){
    var url:string;
    var direc : string[];
    var latitud : any;
    var longitud: any;
    latitud = lat;
    longitud = long;
    url="https://nominatim.openstreetmap.org/reverse?format=json&lat="+latitud+"&lon="+longitud+"&zoom=18&addressdetails=1"
    await this.http.get(url)
   .subscribe(data => {
    direc = Object.values(data);
    this.dir.direct = direc[6];
    console.log(this.dir.direct);
    });
    return this.dir.direct;
   }
   
}
