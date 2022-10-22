import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
import { RecordUserComponent } from 'src/app/record-user/record-user.component';

@Injectable({
  providedIn: 'root'
})
export class InverseService {

  private listGpsSites:MarkerCustom[];
  private SiteUser:MarkerCustom;

  constructor(private http : HttpClient) { 
    this.listGpsSites=[];
    this.SiteUser=new MarkerCustom(0,0);
  }

  private async inverse(marker:MarkerCustom){
    var url:string;
    url="https://nominatim.openstreetmap.org/reverse?format=json&lat="+String(marker.lat)+"&lon="+String(marker.lng)+"&zoom=18&addressdetails=1";
    await this.http.get(url)
   .subscribe(data => {
      var direc = Object.values(data);
      marker.geoInv=direc[6];
    });
   }
   public getListSites(){
    return this.listGpsSites;
   }

   public getSite(){
    return this.SiteUser;
   }

   public async changeSite(lat:number,lng:number){
    this.SiteUser=new MarkerCustom(lat,lng);
    await this.inverse(this.SiteUser);
   }

   public async addMarkerToList(lat:number, lng:number){
    var marker=new MarkerCustom(lat,lng);
    await this.inverse(marker);
    this.listGpsSites.push(marker);
   }
   public deleteMarkerToList(lat:number, lng:number){
    var aux:number=this.listGpsSites.findIndex(x=>x.lat==lat && x.lng==lng);
    if(aux>-1){
      this.listGpsSites.slice(aux,1);
    }
   }

}
class MarkerCustom{
  lat:number;
  lng:number;
  geoInv:string;
  constructor(lat:number,lng:number){
    this.lat=lat;
    this.lng=lng;
    this.geoInv="Por favor selecciona una Ubicación";
  }
}
