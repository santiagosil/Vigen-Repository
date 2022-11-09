import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStaticComponent } from './map-static.component';

describe('MapStaticComponent', () => {
  let component: MapStaticComponent;
  let fixture: ComponentFixture<MapStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
