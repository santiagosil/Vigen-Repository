import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollStadisticsComponent } from './poll-stadistics.component';

describe('PollStadisticsComponent', () => {
  let component: PollStadisticsComponent;
  let fixture: ComponentFixture<PollStadisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollStadisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
