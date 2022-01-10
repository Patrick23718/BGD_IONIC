import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  index = true;
  constructor(private local: LocalStorageService) {
    this.local.set('init', '1');
  }

  ngOnInit() {
    this.local.remove('utilisateur');
  }
  next() {
    this.slides.slideNext().then(() => {
      this.slides.getActiveIndex().then((res: any) => {
        if (res === 2) {
          this.index = false;
        } else {
          this.index = true;
        }
      });
    });
    // this.slides.ionSlideReachEnd.subscribe((res) => {
    //   console.log(res);
    // });
    //slideNext();
  }
}
