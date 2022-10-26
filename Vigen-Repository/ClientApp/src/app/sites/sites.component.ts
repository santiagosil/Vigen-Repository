import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { InverseService } from '../api/MyServices/inverse.service';
import {Site} from '../api/models/site';
import { SiteService } from '../api/services';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;

  public site: Site = {
    countryCode: "",
    id: "",
    nit: "",
    phone: "0",
    range: 0,
    tel: "",
    ubication: "",
    
  };

  constructor(private api: SiteService, private rever : InverseService) {
  }
  


  ngOnInit() {
      
  }
  
  showbien() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha enviado un codigo a su correo',
      showConfirmButton: false,
      timer: 2000
    })
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
    if (this.site.countryCode === "" || this.site.id === "" || this.site.nit === ""
      || this.site.phone === "" || this.site.range === 0
      || this.site.tel === "" || this.site.ubication === "") {
      this.showModal();
    } else {
      this.api.apiSitePost$Json({body:this.site})
      .subscribe(res=> {
        console.log(res)
      });
    }
  }
}
