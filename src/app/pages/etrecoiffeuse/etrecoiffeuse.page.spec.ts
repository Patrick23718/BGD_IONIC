import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtrecoiffeusePage } from './etrecoiffeuse.page';

describe('EtrecoiffeusePage', () => {
  let component: EtrecoiffeusePage;
  let fixture: ComponentFixture<EtrecoiffeusePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtrecoiffeusePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtrecoiffeusePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
