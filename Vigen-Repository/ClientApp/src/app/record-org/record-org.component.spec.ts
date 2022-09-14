import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOrgComponent } from './record-org.component';

describe('RecordOrgComponent', () => {
  let component: RecordOrgComponent;
  let fixture: ComponentFixture<RecordOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
