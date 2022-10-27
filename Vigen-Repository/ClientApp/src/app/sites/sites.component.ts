import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InverseService, MarkerCustom } from '../api/MyServices/inverse.service';
import {Site} from '../api/models/site';
import { SiteService } from '../api/services';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  public sites: SiteCustom[] =[];
  public selected:number=0;


  constructor(private api: SiteService, private rever : InverseService) {
  }
  get listSites(){
    return this.rever.getListSites;
  }
  async addSites(){
    if(this.listSites.length>this.sites.length){
    this.listSites.forEach((marker,index)=>{
      if(this.sites.length-1<index){
        this.sites.push(new SiteCustom());
      }
      this.sites[index].marker=marker;
      this.sites[index].ubication=String(marker.lat)+", "+String(marker.lng);
    });
  }else if(this.listSites.length<this.sites.length){}
}


  ngOnInit() {
      setInterval(()=>{
        this.addSites();
      },1000);
      this.sites[0]=new SiteCustom();
  }
  
  showModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Faltan algunos campos obligatorios por llenar',
      showConfirmButton: false,
      timer: 2000
    })
  }
  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 2000
    })
  }
  public send() {
    
  }

  public addSite(){
    this.selected+=1;
    this.sites.push(new SiteCustom());
  }

}


class SiteCustom{
  marker:MarkerCustom=new MarkerCustom(0,0);
  countryCode:string='';
    id:string='';
    nit:string='';
    phone:string='';
    range:number=0;
    tel:string='';
    ubication:string='';

}