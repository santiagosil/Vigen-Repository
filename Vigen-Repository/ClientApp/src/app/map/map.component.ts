import { Component, OnInit } from '@angular/core';
import { circle, latLng, LatLng, map, Map, marker, tileLayer } from 'leaflet';
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

  constructor(private reverse: InverseService, private user: RecordUserComponent) { }

  ngOnInit(): void {
  }
  async ngAfterViewInit() {
    const map = new Map('map').setView([4.82882, -74.35513], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    /* ----Encontrar Ubicación por medio del GPS---- */

    map.on('locationfound', async (e: {
      accuracy: number, latlng: LatLng
    }) => {
      const markerItem = marker(e.latlng).addTo(map);

      map.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng] //gps
      ])
      if(markerItem.getLatLng().lat != 0){
        var result = await this.reverse.inverse(e.latlng.lat + "", e.latlng.lng + "");
        this.user.data(result);
      }
      /*----------Se elimina cada vez que cambia de ubicacion------*/
      map.on('click', () => map.removeLayer(markerItem));
    });
    map.on('locationerror', (e: { message: string }) => console.error(e.message));
    map.locate();

    /* ----agregar marcadores con click---- */

    map.on('click', async (e: {
      latlng: LatLng
    }) => {
      const markerItem = marker(e.latlng).addTo(map);
      map.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
      ])
      if(markerItem.getLatLng().lat != 0){
        var result = await this.reverse.inverse(e.latlng.lat + "", e.latlng.lng + "");
        this.user.data(result);
      }
      /*----------Se elimina cada vez que cambia de ubicacion------*/
      map.on('click', () => map.removeLayer(markerItem));
    });




  }


}
