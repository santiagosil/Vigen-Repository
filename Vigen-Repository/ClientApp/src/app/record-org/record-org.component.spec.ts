import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordOrgComponent } from './record-org.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('RecordOrgComponent', () => {
  let component: RecordOrgComponent;
  let fixture: ComponentFixture<RecordOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ RecordOrgComponent ]
    })
    .compileComponents();
  });

  it('Debe existir record-org.component', () => {
    const fixture = TestBed.createComponent(RecordOrgComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(RecordOrgComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    const form = component.form;
    const nomOrg = component.form.controls['nomOrg']
    nomOrg.setValue('Vigen')
    expect(form.invalid).toBeTrue();
  });
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(RecordOrgComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    let form = component.form
    let nomOrg = component.form.controls['nomOrg']
    let nitOrg = component.form.controls['nitOrg']
    let ubiOrg = component.form.controls['ubiOrg']
    let telOrg = component.form.controls['telOrg']
    
    nomOrg.setValue('Vigen')
    nitOrg.setValue('12345')
    ubiOrg.setValue('calle 7 # 15-14')
    telOrg.setValue('987654')
    expect(component.form.invalid).toBeFalse();
  });
  it('Debe actualizar datos', () => {
    const fixture = TestBed.createComponent(RecordOrgComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()
    let form = component.form
   
    let nomOrg = component.form.controls['nomOrg']
    let nitOrg = component.form.controls['nitOrg']
    let ubiOrg = component.form.controls['ubiOrg']
    let telOrg = component.form.controls['telOrg']
    nomOrg.setValue('Vigen')
    nitOrg.setValue('12345')
    ubiOrg.setValue('calle 7 # 15-14')
    telOrg.setValue('987654')

    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    const testData = { user:1 }
    expect(component.isCheck).toEqual(testData)
  });
});
