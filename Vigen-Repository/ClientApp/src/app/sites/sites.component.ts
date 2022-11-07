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
  nit:sessionStorage.getItem("NitRegister"),
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

  siteForm!:FormGroup;

  ngOnInit() {
    this.sites.push(site);
    this.geoInv.push('');
    this.siteForm = this.initForm();
    this.rever.geoLocalitation.subscribe(
      res=>{
        this.siteForm.patchValue({"geoInv":res});
        this.geoInv.push(res);
        this.geoInv[this.selected]=res;
      });
    
  }

  initForm():FormGroup{
    return this.fb.group({
      id:['',Validators.required],
      nit:[sessionStorage.getItem("NitRegister"),Validators.required],
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
    this.siteForm.patchValue({"ubication":latLng.lat+', '+latLng.lng});
    this.rever.calculateGeoLocalitation(latLng);
    this.onChangeForm();
  }

  onChangeForm():void{
    this.sites[this.selected]= {
      id: this.siteForm.get('id')?.value,
      nit: sessionStorage.getItem("NitRegister"),
      range: this.siteForm.get('range')?.value,
      ubication: this.siteForm.get('ubication')?.value,
      countryCode: this.siteForm.get('countryCode')?.value,
      phone: this.siteForm.get('phone')?.value,
      tel: this.siteForm.get('tel')?.value,
    };
  }
  autocompleteForm(i:number){
    this.selected=i;
    this.siteForm.setValue({
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

  onSelectEdit(i:number): void{
    if(!this.siteForm.valid){
      Swal.fire({
        icon:'error',
        title:'por favor complete el formulario actual'
      });
      return;
    }
    this.onChangeForm();
    this.autocompleteForm(i);
    
    
  }

  onSelectDelete(i:number):void{
    console.log(i);
    if(this.sites.length===1){
      Swal.fire({
        icon: 'error',
        title: 'Debe de existir al menos una sede'
      });
    }else{
      this.sites.splice(i,1);
      this.geoInv.splice(i,1);
      this.selected=0;
      this.autocompleteForm(this.selected);
    }
    
  }

  addSite() {
    if(!this.siteForm.valid){
      Swal.fire({
        icon:'info',
        title:'Debe completar la sede actual antes de agregar una adicional'
      });
      return;
    }
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
  showUbication(i:number){
    Swal.fire({
      position: 'center',
      title: 'La ubicación es:',
      text: String(this.geoInv[i]),
    })
  }

  public send() {
    if(!this.siteForm.valid){
      Swal.fire({
        icon:'warning',
        title:'uno o mas campos no han sido completados'
      });
      return;
    }

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
    sessionStorage.setItem("UserId",String(sessionStorage.getItem('NitRegister')));
    sessionStorage.setItem("TypeUser","1");
    this.router.navigate(["/pOrg"]);
  }

}