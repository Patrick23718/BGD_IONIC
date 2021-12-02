import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ask-confirmation',
  templateUrl: './ask-confirmation.page.html',
  styleUrls: ['./ask-confirmation.page.scss'],
})
export class AskConfirmationPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
