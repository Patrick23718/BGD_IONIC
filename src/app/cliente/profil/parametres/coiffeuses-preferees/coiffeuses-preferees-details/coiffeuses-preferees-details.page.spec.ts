import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoiffeusesPrefereesDetailsPage } from './coiffeuses-preferees-details.page';

describe('CoiffeusesPrefereesDetailsPage', () => {
  let component: CoiffeusesPrefereesDetailsPage;
  let fixture: ComponentFixture<CoiffeusesPrefereesDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoiffeusesPrefereesDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoiffeusesPrefereesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
