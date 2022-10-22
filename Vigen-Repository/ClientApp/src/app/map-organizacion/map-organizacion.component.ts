import { Component, OnInit } from '@angular/core';
import { Circle, circle, circleMarker, latLng, LatLng, Layer, LayerGroup, layerGroup, map, Map, Marker, marker, tileLayer } from 'leaflet';
import { InverseService } from '../api/MyServices/inverse.service';

export let latlong = new LatLng(0, 0);

@Component({
  selector: 'app-map-organizacion',
  templateUrl: './map-organizacion.component.html',
  styleUrls: ['./map-organizacion.component.css']
})
export class MapOrganizacionComponent implements OnInit {

  constructor(private reverse: InverseService) {
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
      this.reverse.addMarkerToList(markerItem.getLatLng().lat, markerItem.getLatLng().lng);
      const circulo = circle(e.latlng, {
        radius: e.accuracy,
        color: 'red'
      }).addTo(map);

      markerItem.on('click', () => {
        this.reverse.deleteMarkerToList(markerItem.getLatLng().lat,markerItem.getLatLng().lng);
        map.removeLayer(markerItem);
        map.removeLayer(circulo);
      });

    });

    map.on('click', async (e: {
      latlng: LatLng
    }) => {
      const markerItem = marker(e.latlng).addTo(map);
      const circulo = circle(e.latlng, {
        radius: 16,
        color: 'red',

      }).addTo(map);

      this.reverse.addMarkerToList(markerItem.getLatLng().lat, markerItem.getLatLng().lng);
      markerItem.on('click', () => {
        //this.markerGroup.removeLayer(markerItem);
        this.reverse.deleteMarkerToList(markerItem.getLatLng().lat,markerItem.getLatLng().lng);
        map.removeLayer(markerItem);
        map.removeLayer(circulo);
      });
    });
  }
}