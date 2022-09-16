import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUserComponent } from './record-user.component';

describe('RecordUserComponent', () => {
  let component: RecordUserComponent;
  let fixture: ComponentFixture<RecordUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
