import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map-static',
  templateUrl: './map-static.component.html',
  styleUrls: ['./map-static.component.css']
})
export class MapStaticComponent implements OnChanges {
  @Input() origin!:string;
  @Input() destinate!:string;
  @Input() range!:string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Map-Static');
    
    console.log(this.origin);
    console.log(this.destinate);
    console.log(this.range);
  }

}
