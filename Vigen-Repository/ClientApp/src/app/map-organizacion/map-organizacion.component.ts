import { Component, OnInit } from '@angular/core';
import { Circle, circle, circleMarker, latLng, LatLng, LayerGroup, layerGroup, map, Map, Marker, marker, tileLayer } from 'leaflet';
import { InverseService } from '../api/MyServices/inverse.service';

export let latlong = new LatLng(0, 0);

@Component({
  selector: 'app-map-organizacion',
  templateUrl: './map-organizacion.component.html',
  styleUrls: ['./map-organizacion.component.css']
})
export class MapOrganizacionComponent implements OnInit {

  private markerGroup:LayerGroup<any>;

  constructor(private reverse: InverseService) { 
    this.markerGroup= layerGroup();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    const map = new Map('map').setView([4.82882, -74.35513], 18);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // ----Encontrar Ubicación por medio del GPS---- 
    map.locate();

    map.on('locationfound', async (e: {
      accuracy: number, latlng: LatLng;
    }) => {
      const markerItem = marker(e.latlng).addTo(map);
      this.markerGroup.addLayer(markerItem);
      const circulo = circle(e.latlng, {
        radius: e.accuracy,
        color: 'red'
      }).addTo(map);

      markerItem.on('click', () =>{
        this.markerGroup.removeLayer(markerItem);
        map.removeLayer(markerItem);
        map.removeLayer(circulo);
      });

    });

    map.on('click', async (e: {
      latlng: LatLng
    }) => {
      console.log(this.markerGroup);
      const markerItem = marker(e.latlng).addTo(map);
      const circulo = circle(e.latlng, {
        radius: 16,
        color: 'red',

      }).addTo(map);
      
      this.markerGroup.addLayer(markerItem);
      markerItem.on('click', () =>{
        this.markerGroup.removeLayer(markerItem);
        map.removeLayer(markerItem);
        map.removeLayer(circulo);
      });
    });
  }

}
