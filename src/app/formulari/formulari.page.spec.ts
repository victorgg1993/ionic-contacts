import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulariPage } from './formulari.page';

describe('FormulariPage', () => {
  let component: FormulariPage;
  let fixture: ComponentFixture<FormulariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
