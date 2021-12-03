import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ask-delete',
  templateUrl: './ask-delete.page.html',
  styleUrls: ['./ask-delete.page.scss'],
})
export class AskDeletePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
