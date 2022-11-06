import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Organization, User } from '../api/models';
import { OrganizationService, UserService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  initForm(): FormGroup {
    return this.fb.group({
      identification: [localStorage.getItem("UserId") ?? '', Validators.required],
      password: ['', Validators.required],
      typeUser: [localStorage.getItem("TypeUser") ?? '', Validators.required],
      rememberMe: [localStorage.getItem("UserId") ? true : false]
    });
  }
  constructor(private api: UserService, private router: Router, private orga: OrganizationService, private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.loginForm = this.initForm();
  }
  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
      showConfirmButton: false,
      timer: 1500
    })
  }
  public send() {
    if (!this.loginForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Faltan Algunos campos por completar'
      });
      return;
    }

    if (this.loginForm.value.rememberMe) {
      localStorage.setItem("UserId", this.loginForm.get("identification")?.value);
      localStorage.setItem("TypeUser", this.loginForm.get("typeUser")?.value);
    } else {
      localStorage.removeItem("UserId");
      localStorage.removeItem("TypeUser");
    }

    sessionStorage.setItem("UserId", this.loginForm.get('identification')?.value);
    sessionStorage.setItem("TypeUser", this.loginForm.get('typeUser')?.value);
    
    if(this.loginForm.get('typeUser')?.value==='0'){      
      this.api.loginUser(this.loginForm.get('identification')?.value,this.loginForm.get('password')?.value).subscribe(
        res=>{
          if(!res){
            this.showModal();
            return;
          }
          sessionStorage.setItem("UserName", Object.values(res)[0]);
          this.router.navigate(["/pUser"]);
        });
    }else if(this.loginForm.get('typeUser')?.value==='org'){
      this.orga.loginOrg(this.loginForm.get('identification')?.value,this.loginForm.get('password')?.value).subscribe(
        res=>{
          if(!res){
            this.showModal();
            return;
          }
          sessionStorage.setItem("UserName", Object.values(res)[0]);
          this.router.navigate(["/pOrg"]);
        });
    }
    
  }
}

