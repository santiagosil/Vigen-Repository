import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Organization } from '../api/models';
import { OrganizationService } from '../api/services';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.css']
})
export class EditOrgComponent implements OnInit {

  orgForm: Organization = {
    name: '',
    password: '',
    nit: '',
    phone: '',
    tel: '',
    organizationTypeId: 1
  }


  constructor(private api: OrganizationService) { }

  ngOnInit(): void {
    this.api.apiOrganizationIdGet$Json({ id: String(localStorage.getItem('UserId')) }).subscribe((res) => {
      this.orgForm = res;
      console.log(this.orgForm);
    });
  }

  onSubmit(){
    this.api.putOrganization(String(localStorage.getItem('UserId')),this.orgForm).subscribe((res)=>{
      Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'la Organización ha sido actualizado',
      });
    },(error)=>{
      console.log(error);
    });
  }


}
