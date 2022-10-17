import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showBotton= false;
  showPanel1=true;
  showPanel2=false;
  showPanel3=false;
  showPanel4=false;
  private scrollHeight = 200;

  constructor(@Inject (DOCUMENT) private document: Document) { 

  }

  ngOnInit(): void {
  }
  view1():void{
    this.showPanel1 = true;
    this.showPanel2 = false;
    this.showPanel3 = false;
    this.showPanel4 = false;
    
  }
  view2():void{
    this.showPanel1 = false;
    this.showPanel2 = true;
    this.showPanel3 = false;
    this.showPanel4 = false;
  }
  view3():void{
    this.showPanel1 = false;
    this.showPanel2 = false;
    this.showPanel3 = true;
    this.showPanel4 = false;
  }
  view4():void{
    this.showPanel1 = false;
    this.showPanel2 = false;
    this.showPanel3 = false;
    this.showPanel4 = true;
  }

  @HostListener('window:scroll')
  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showBotton = (yOffSet || scrollTop) > this.scrollHeight;

  }
  onScrollTop():void{
    this.document.documentElement.scrollTop = 0;
  }
  
}
