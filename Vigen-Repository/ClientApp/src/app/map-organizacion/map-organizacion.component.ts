import { Component, OnInit } from '@angular/core';
import { circle, circleMarker, latLng, LatLng, map, Map, marker, tileLayer } from 'leaflet';
import { InverseService } from '../api/MyServices/inverse.service';

export let latlong =new LatLng(0,0);

@Component({
  selector: 'app-map-organizacion',
  templateUrl: './map-organizacion.component.html',
  styleUrls: ['./map-organizacion.component.css']
})
export class MapOrganizacionComponent implements OnInit {

  constructor(private reverse: InverseService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const map = new Map('map').setView([4.82882, -74.35513], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    
  /* ----Encontrar Ubicación por medio del GPS---- */

  map.on('locationfound', async (e : {
    accuracy: number, latlng: LatLng
  }) => {
    const markerItem = marker(e.latlng).addTo(map);
    const circulo = circle(e.latlng,{
      radius: e.accuracy,
      color: 'red'
    }).addTo(map);
    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ])
    markerItem.on('click',()=>map.removeLayer(markerItem));
    markerItem.on('click',()=>map.removeLayer(circulo));
    var result = await this.reverse.inverse1(e.latlng.lat + "", e.latlng.lng + "");
  });
  map.on('locationerror', (e : {message: string} ) => console.error(e.message));
  map.locate();

  /* ----agregar marcadores con click---- */
  
  map.on('dblclick', async (e : {
    latlng: LatLng
  }) => {
    const markerItem = marker(e.latlng).addTo(map);
    const circulo = circle(e.latlng,{
      radius: 16,
      color: 'red',
      
    }).addTo(map);
    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ])
      markerItem.on('click', ()=>map.removeLayer(markerItem));
      markerItem.on('click',()=>map.removeLayer(circulo));
      markerItem.on('click', ()=> console.log("hello"))
    var result = await this.reverse.inverse1(e.latlng.lat + "", e.latlng.lng + "");
  });
  
 
  


  }

}
