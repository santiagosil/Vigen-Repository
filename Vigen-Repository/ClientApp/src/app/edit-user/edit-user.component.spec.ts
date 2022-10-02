import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ EditUserComponent ]
    })
    .compileComponents();
  });

  it('Debe existir record-org.component', () => {
    const fixture = TestBed.createComponent(EditUserComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });
  /*it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(EditUserComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    const form = component.form;
    const userName = component.form.controls['userName']
    userName.setValue('SebasDesign')
    expect(form.invalid).toBeTrue();
  });
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(EditUserComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    let form = component.form
    let userName= component.form.controls['userName']
    let correo = component.form.controls['correo']
    let pass = component.form.controls['pass']

    userName.setValue('SebasDesign')
    correo.setValue('test@gmail.com')
    pass.setValue('987456')
    
    expect(component.form.invalid).toBeFalse();
  });*/
});
