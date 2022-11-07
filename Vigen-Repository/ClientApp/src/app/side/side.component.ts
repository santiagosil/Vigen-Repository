import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
@ Input() typeUser!:string;
@ Input() userName!:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(["/home"]);
  }

}
