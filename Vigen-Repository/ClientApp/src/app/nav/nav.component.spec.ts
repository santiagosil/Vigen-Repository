import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  it('Debe existir record-org.component', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });
});
