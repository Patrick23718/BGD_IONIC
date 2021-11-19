import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionCoiffeusePage } from './inscription-coiffeuse.page';

describe('InscriptionCoiffeusePage', () => {
  let component: InscriptionCoiffeusePage;
  let fixture: ComponentFixture<InscriptionCoiffeusePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionCoiffeusePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionCoiffeusePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
