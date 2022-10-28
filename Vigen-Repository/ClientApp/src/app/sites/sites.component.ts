import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InverseService, MarkerCustom } from '../api/MyServices/inverse.service';
import { Site } from '../api/models/site';
import { SiteService } from '../api/services';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  public sites: SiteCustom[] = [];
  public selected: number = 0;


  constructor(private api: SiteService, private rever: InverseService,private router:Router) {
  }
  get listSites() {
    return this.rever.getListSites;
  }
  async addSites() {
    setInterval(() => {
      let long = this.listSites.length;
      this.listSites[0].geoInv;
      if (this.listSites.length > this.sites.length) {
        this.sites.push(new SiteCustom());
        this.sites[long - 1].nit=String(localStorage.getItem('NitRegister'));
        this.sites[long - 1].marker = this.listSites[long - 1];
        this.sites[long - 1].ubication = String(this.listSites[long - 1].lat) + ", " + String(this.listSites[long - 1].lng);
      }
      if(this.sites.length==1){
        this.sites[0].marker=this.listSites[0];
        this.sites[0].nit=String(localStorage.getItem('NitRegister'));
        this.sites[0].ubication = String(this.listSites[0].lat) + ", " + String(this.listSites[0].lng);
      }
    }, 1000);
  }


  ngOnInit() {
    this.addSites();
    this.sites.push(new SiteCustom());
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
    this.sites.forEach((site)=>{
      var siteAux:Site={
        id:site.id,
        nit:site.nit,
        countryCode:site.countryCode,
        phone:site.phone,
        range:site.range,
        tel:site.tel,
        ubication:site.ubication
      }
      this.api.apiSitePost$Json({body:siteAux}).subscribe((res)=>{
        console.log("Success");
        console.log(res);
      },(err)=>{
        console.log("Error");
        console.log(err);
      });
    });
    localStorage.setItem("UserId",String(localStorage.getItem('NitRegister')));
    localStorage.setItem("TypeUser","1");
    this.router.navigate(["/pOrg"]);
  }

}


class SiteCustom {
  marker: MarkerCustom = new MarkerCustom(0, 0);
  countryCode: string = '';
  id: string = '';
  nit: string = '';
  phone: string = '';
  range: number = 0;
  tel: string = '';
  ubication: string = '';

}