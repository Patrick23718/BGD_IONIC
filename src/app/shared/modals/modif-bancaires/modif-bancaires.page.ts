import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modif-bancaires',
  templateUrl: './modif-bancaires.page.html',
  styleUrls: ['./modif-bancaires.page.scss'],
})
export class ModifBancairesPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
