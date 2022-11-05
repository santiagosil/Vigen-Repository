import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InverseService, MarkerCustom } from '../api/MyServices/inverse.service';
import { SiteService } from '../api/services';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { LatLng } from 'leaflet';
import { Site } from '../api/models';
import { select } from 'd3';

const site:Site={
  countryCode:'',
  id:'',
  nit:localStorage.getItem("NitRegister"),
  phone:'',
  range:0,
  tel:'',
  ubication:''
};

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  public sites: Site[] = [];
  public geoInv:String[]=[];
  public selected: number = 0;

  organizationForm!:FormGroup;

  ngOnInit() {
    this.sites.push(site);
    this.geoInv.push('');
    this.organizationForm = this.initForm();
    this.rever.geoLocalitation.subscribe(
      res=>{
        this.organizationForm.patchValue({"geoInv":res});
        this.geoInv.push(res);
        this.geoInv[this.selected]=res;
      });
    
  }

  initForm():FormGroup{
    return this.fb.group({
      id:['',Validators.required],
      nit:[localStorage.getItem("NitRegister"),Validators.required],
      ubication:['',Validators.required],
      range:[0,Validators.required],
      countryCode:['',Validators.required],
      phone:['',Validators.required],
      tel:['',Validators.required],
      geoInv:['']
    });
  }

  


  constructor(private api: SiteService, private rever: InverseService,private router:Router,private fb:FormBuilder) {
  }

  onChangeSite(latLng:LatLng):void {
    this.organizationForm.patchValue({"ubication":latLng.lat+', '+latLng.lng});
    this.rever.calculateGeoLocalitation(latLng);
    this.onChangeForm();
  }

  onChangeForm():void{
    this.sites[this.selected]= {
      id: this.organizationForm.get('id')?.value,
      nit: localStorage.getItem("NitRegister"),
      range: this.organizationForm.get('range')?.value,
      ubication: this.organizationForm.get('ubication')?.value,
      countryCode: this.organizationForm.get('countryCode')?.value,
      phone: this.organizationForm.get('phone')?.value,
      tel: this.organizationForm.get('tel')?.value,
    };
  }

  onSelectEdit(i:number): void{
    this.onChangeForm();
    this.selected=i;
    this.organizationForm.setValue({
      id:this.sites[i].id,
      nit:this.sites[i].nit,
      range:this.sites[i].range,
      ubication:this.sites[i].ubication,
      geoInv:this.geoInv[i],
      countryCode:this.sites[i].countryCode,
      phone:this.sites[i].phone,
      tel:this.sites[i].tel
    });
  }

  onSelectDelete(i:number):void{
    console.log(i);
    if(this.sites.length===1){
      Swal.fire({
        icon: 'error',
        title: 'Debe de existir al menos una sede'
      });
    }else{
      this.selected=0;
      this.sites.splice(i,1);
      this.geoInv.splice(i,1);
    }
    
  }

  addSite() {
    this.sites.push(site);
    this.geoInv.push('');
    this.onSelectEdit(this.sites.length-1);
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


public test(){
  console.log(this.sites);
  console.log(this.organizationForm);
  
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