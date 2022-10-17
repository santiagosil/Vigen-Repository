import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InverseService {

  constructor(private http : HttpClient) { 
  }

  public dir = {
    direct : ""
  }

  public inverse(lat:string, long:string){
    var url:string;
    var direc : string[];
    var latitud : any;
    var longitud: any;
    latitud = lat;
    longitud = long;
    url="https://nominatim.openstreetmap.org/reverse?format=json&lat="+latitud+"&lon="+longitud+"&zoom=18&addressdetails=1"
    this.http.get(url)
   .subscribe(data => {
    direc = Object.values(data);
    this.dir.direct = direc[6];
    });
   }
}
