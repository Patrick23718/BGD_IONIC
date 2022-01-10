/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-suggestion-ville',
  templateUrl: './suggestion-ville.page.html',
  styleUrls: ['./suggestion-ville.page.scss'],
})
export class SuggestionVillePage implements OnInit {
  ville = '';
  constructor(
    private modalCtrl: ModalController,
    private villeService: VilleService
  ) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}
  onClick() {
    this.villeService.suggestVille({ ville: this.ville }).subscribe(
      (res: any) => {
        console.log(res);
        this.dismiss();
      },
      (err: any) => {
        console.warn(err);
        this.dismiss();
      }
    );
  }
}
