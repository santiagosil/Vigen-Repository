import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Organization } from '../api/models';
import { OrganizationService } from '../api/services';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.css']
})
export class EditOrgComponent implements OnInit {

  OrganizationForm!: FormGroup;
  initForm(): FormGroup {
    return this.fb.group({
      nit: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],
      phone: ['', Validators.required],
      typeId: ['', Validators.required],
      password: ['',],
      passwordHide: ['',],
      newPassword: ['',],
      confirmPassword: ['',],
    });
  }


  constructor(private api: OrganizationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.OrganizationForm = this.initForm();
    this.api.apiOrganizationIdGet$Json({ id: String(sessionStorage.getItem('UserId')) }).subscribe((res) => {
      this.OrganizationForm.setValue({
        nit: res.nit,
        name: res.name,
        tel: res.tel,
        phone: res.phone,
        passwordHide: res.password,
        typeId: String(res.organizationTypeID),
        password: '',
        newPassword: '',
        confirmPassword: ''
      });
    });
  }

  onSubmit() {
    if (!this.OrganizationForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Faltan algunos campos por completar'
      });
      return;
    }
    if (this.OrganizationForm.value['password'] || this.OrganizationForm.value['newPassword'] || this.OrganizationForm.value['confirmPassword']) {

      if (this.OrganizationForm.value['password'] != this.OrganizationForm.value['passwordHide']) {
        Swal.fire({
          icon: 'error',
          title: 'La contraseña anterior es inválida',
        });
        return;
      }
      
      if (this.OrganizationForm.value['newPassword'] != this.OrganizationForm.value['confirmPassword']) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no conciden'
        });
        return;
      }
      this.OrganizationForm.patchValue({ 'passwordHide': this.OrganizationForm.value['newPassword'] });
    }
    let orgForm: Organization = {
      name: this.OrganizationForm.value['name'],
      password: this.OrganizationForm.value['passwordHide'],
      nit: this.OrganizationForm.value['nit'],
      phone: this.OrganizationForm.value['phone'],
      tel: this.OrganizationForm.value['tel'],
      organizationTypeID: Number(this.OrganizationForm.value['typeId']),
    };

    this.api.putOrganization(String(sessionStorage.getItem('UserId')), orgForm).subscribe((res) => {
      sessionStorage.setItem('UserName', orgForm.name ?? '');
      Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'la Organización ha sido actualizado',
      });
    });
  }
}
