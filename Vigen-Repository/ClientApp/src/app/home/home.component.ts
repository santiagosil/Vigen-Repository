import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showBotton= false;
  private scrollHeight = 500;

  constructor(@Inject (DOCUMENT) private document: Document) { 

  }

  ngOnInit(): void {
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
