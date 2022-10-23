import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOrgComponent } from './panel-org.component';

describe('PanelOrgComponent', () => {
  let component: PanelOrgComponent;
  let fixture: ComponentFixture<PanelOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
