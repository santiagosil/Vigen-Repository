import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { latlong } from '../map/map.component';
import { OrganizationService } from '../api/services';
import { Organization, User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';
import Swal from 'sweetalert2';
import { InverseService } from '../api/MyServices/inverse.service';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {

  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Las contraseñas no coinciden',
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

  formOrganization!: FormGroup;
  initForm(): FormGroup {
    return this.fb.group({
      nit: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  passwordNoMatch = false;


  organization!: Organization;



  constructor(
    private api: OrganizationService,
    private fb: FormBuilder,
    private reverse: InverseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formOrganization = this.initForm();
  }
  public send() {
    if (!this.formOrganization.valid) {
      this.showModal();
      return;
    }
    if (this.formOrganization.value['password'] != this.formOrganization.value['confirmPassword']) {
      this.passwordNoMatch = true;
      this.showContra();
      return;
    }
    this.organization = {
      nit: this.formOrganization.value['nit'],
      name: this.formOrganization.value['name'],
      tel: this.formOrganization.value['tel'],
      phone: this.formOrganization.value['phone'],
      password: this.formOrganization.value['password'],
      organizationTypeID: 1
    }
    this.api.postOrganization(this.organization)
      .subscribe(res => {
        sessionStorage.setItem("NitRegister", String(this.organization.nit));
        this.router.navigate(['/sites']);
      });
  }
}
