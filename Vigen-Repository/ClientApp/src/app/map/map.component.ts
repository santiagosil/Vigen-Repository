import { Component, OnInit } from '@angular/core';
import { circle, latLng, LatLng, map, Map, Marker, marker, tileLayer } from 'leaflet';
import { __values } from 'tslib';
import { InverseService } from '../api/MyServices/inverse.service'
import { RecordUserComponent } from '../record-user/record-user.component';

export let latlong = new LatLng(0, 0);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private marker:Marker<any>;

  constructor(private reverse: InverseService, private user: RecordUserComponent) {
    this.marker=marker(new LatLng(0, 0));
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    
    const map = new Map('map').setView([4.82882, -74.35513], 18);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // ----Encontrar Ubicación por medio del GPS---- 
    map.locate();

    map.on('locationfound', async (e: {
      latlng: LatLng;
    }) => {
      this.marker.remove();
      this.marker = marker(e.latlng).addTo(map);
    });

    map.on('click', async (e: {
      latlng: LatLng
    }) => {
      this.marker.remove();
      this.marker = marker(e.latlng).addTo(map);
  });

  }
}
