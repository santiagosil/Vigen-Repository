import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyStadisticsComponent } from './notify-stadistics.component';

describe('NotifyStadisticsComponent', () => {
  let component: NotifyStadisticsComponent;
  let fixture: ComponentFixture<NotifyStadisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyStadisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
