import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  focused : boolean;
  btn : boolean = true;
  part1 : boolean = true;
  part2: boolean = false;
  constructor(
    public alert : AlertController
  ) { }

  ngOnInit() {
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  async slide(){
    const alert = await this.alert.create({
      header:'',
      message:
      `
      <div class="h-full">
        <ion-slides pager="true" class="h-full">
          <ion-slide class="block">
            <img src="/assets/icon/img1.svg">
          </ion-slide>
          <ion-slide class="block">
            <img src="/assets/icon/img2.svg">
          </ion-slide>
          <ion-slide class="block">
            <img src="/assets/icon/img3.svg">
          </ion-slide>
        </ion-slides>
        <ion-button>
          recherche
        </ion-button>
      </div>

      `,
    });
    await alert.present()
  }

}
