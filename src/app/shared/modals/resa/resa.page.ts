/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonThumbnail, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.page.html',
  styleUrls: ['./resa.page.scss'],
})
export class ResaPage implements OnInit {
  resa;
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

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    // console.log(this.resa[this.id]);
    this.modalController.dismiss(this.resa[this.id].title);
  }

  ngOnInit() {
    console.log(this.resa);
  }
  getPrestation() {
    this.getIndex().then(() => {
      this.dismiss();
    });
  }
}
