/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.page.html',
  styleUrls: ['./resa.page.scss'],
})
export class ResaPage implements OnInit {
  resa;
  presta = [];
  id: number;

  constructor(private modalController: ModalController) {
    console.log(this.resa);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('testSlider') slider: ElementRef; // first way
  @ViewChild(IonSlides) slides: IonSlides;

  async getIndex() {
    this.id = await this.slides.getActiveIndex();
    // .then((res: any) => {
    //   this.id = res;
    //   console.log(res);
    // });
  }

  slideOpts = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // effect: slide,
    // spaceBetween: 8,
    slidesPerView: 1,
    // freeMode: true,
    loop: true,
  };

  dismiss(item) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log(this.resa[this.id]);
    this.modalController.dismiss(item);
  }

  ngOnInit() {
    if (this.resa.type.length === 0) {
      this.presta.push(this.resa);
    } else {
      for (let i = 0; i < this.resa.type.length; i++) {
        if (this.resa.type[i].imageURL !== '') {
          this.presta.push(this.resa.type[i]);
        }
      }
    }
    console.log(this.resa.type.length);
    // if(this.resa.type)
  }
  getPrestation(item) {
    this.getIndex().then(() => {
      this.dismiss(item);
    });
  }
}
