import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnexionCoiffeusePage } from './connexion-coiffeuse.page';

describe('ConnexionCoiffeusePage', () => {
  let component: ConnexionCoiffeusePage;
  let fixture: ComponentFixture<ConnexionCoiffeusePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionCoiffeusePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnexionCoiffeusePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
