import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOrganizacionComponent } from './map-organizacion.component';

describe('MapOrganizacionComponent', () => {
  let component: MapOrganizacionComponent;
  let fixture: ComponentFixture<MapOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
