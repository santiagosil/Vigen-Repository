import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEstadisticaComponent } from './panel-estadistica.component';

describe('PanelEstadisticaComponent', () => {
  let component: PanelEstadisticaComponent;
  let fixture: ComponentFixture<PanelEstadisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEstadisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
