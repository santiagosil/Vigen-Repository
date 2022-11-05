import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Circle, circle, latLng, LatLng, map, Map, Marker, marker, tileLayer } from 'leaflet';
import { __values } from 'tslib';
import { InverseService } from '../api/MyServices/inverse.service'

export let latlong = new LatLng(0, 0);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() range: number = 0;
  @Input() latLng: string = '';
  @Output() latLngEvent = new EventEmitter<LatLng>();

  public marker: Marker<any>;
  private circle: Circle<any>;

  constructor() {
    this.marker = marker(new LatLng(0, 0));
    this.circle = circle(new LatLng(0, 0));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const auxLatLng = this.latLng.split(', ');
    if (!isNaN(Number(auxLatLng[0])) && !isNaN(Number(auxLatLng[1]))) {
      const aux=new LatLng(Number(auxLatLng[0]), Number(auxLatLng[1]));
      this.marker.setLatLng(aux);
      this.circle.setLatLng(aux);
      //map.setView(aux)
    }
    this.circle.setRadius(this.range);
  }

  ngOnInit(): void {
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
      this.circle.remove();
      this.marker = marker(e.latlng).addTo(map);
      this.circle = circle(e.latlng, { radius: this.range }).addTo(map);
      this.latLngEvent.emit(e.latlng);
      map.setView(e.latlng, 18);
    });

    map.on('click', async (e: {
      latlng: LatLng
    }) => {
      this.marker.remove();
      this.circle.remove();
      this.marker = marker(e.latlng).addTo(map);
      this.circle = circle(e.latlng, { radius: this.range }).addTo(map);
      this.latLngEvent.emit(e.latlng);
    });
  }

}
