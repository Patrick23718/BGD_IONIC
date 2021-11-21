import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoiffeusesPrefereesPage } from './coiffeuses-preferees.page';

describe('CoiffeusesPrefereesPage', () => {
  let component: CoiffeusesPrefereesPage;
  let fixture: ComponentFixture<CoiffeusesPrefereesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoiffeusesPrefereesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoiffeusesPrefereesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
