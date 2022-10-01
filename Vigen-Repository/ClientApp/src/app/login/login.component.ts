import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha enviado un codigo a tu correo',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
