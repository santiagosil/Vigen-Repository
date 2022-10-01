import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordUserComponent } from './record-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RecordUserComponent', () => {
  let component: RecordUserComponent;
  let fixture: ComponentFixture<RecordUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ RecordUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir record-org.component', () => {
    const fixture = TestBed.createComponent(RecordUserComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(RecordUserComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    const form = component.form;
    
    const nomUser = component.form.controls['nomUser']
    nomUser.setValue('Sebas')
    expect(form.invalid).toBeTrue();
  });
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(RecordUserComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    let form = component.form
    let nomUser = component.form.controls['nomUser']
    let correoUser = component.form.controls['correoUser'] 
    let fechaNa = component.form.controls['fechaNa'] 
    let telUser = component.form.controls['telUser']
    let ocupaUser = component.form.controls['ocupaUser'] 
    let postUser = component.form.controls['postUser'] 
    let ecivlUser = component.form.controls['ecivlUser'] 
    let idUser = component.form.controls['idUser'] 
    
    
    nomUser.setValue('Sebas')
    correoUser.setValue('test@gmail.com')
    fechaNa.setValue('18-04-2000')
    telUser.setValue('987654')
    ocupaUser.setValue('estudiante')
    postUser.setValue('200')
    ecivlUser.setValue('soltero')
    idUser.setValue('1007467776')
    expect(component.form.invalid).toBeFalse();
  });
  it('Debe actualizar datos', () => {
    const fixture = TestBed.createComponent(RecordUserComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    let form = component.form
    let nomUser = component.form.controls['nomUser']
    let correoUser = component.form.controls['correoUser'] 
    let fechaNa = component.form.controls['fechaNa'] 
    let telUser = component.form.controls['telUser']
    let ocupaUser = component.form.controls['ocupaUser'] 
    let postUser = component.form.controls['postUser'] 
    let ecivlUser = component.form.controls['ecivlUser'] 
    let idUser = component.form.controls['idUser'] 
    
    
    nomUser.setValue('Sebas')
    correoUser.setValue('test@gmail.com')
    fechaNa.setValue('18-04-2000')
    telUser.setValue('987654')
    ocupaUser.setValue('estudiante')
    postUser.setValue('200')
    ecivlUser.setValue('soltero')
    idUser.setValue('1007467776')

    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    const testData = { user:2 }
    expect(component.isCheck).toEqual(testData)
  });
});
