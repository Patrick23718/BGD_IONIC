import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-donnees-bancaires',
  templateUrl: './donnees-bancaires.page.html',
  styleUrls: ['./donnees-bancaires.page.scss'],
})
export class DonneesBancairesPage implements OnInit {
  bankForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.bankForm = this.formBuilder.group({
      numero: formBuilder.control('123123', [
        Validators.required,
        // Validators.pattern(
        //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$' /*'^[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'*/
        // ),
      ]),
      cvv: formBuilder.control('123', [
        Validators.required,
        // Validators.minLength(1),
      ]),
      nom: formBuilder.control('', [
        Validators.required,
        // Validators.minLength(1),
      ]),
      date: formBuilder.control('12/21', [
        Validators.required,
        // Validators.minLength(1),
      ]),
    });
  }

  control(name: string) {
    return this.bankForm.get(name);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}
  onClick() {
    console.log(this.bankForm.value);
  }
  count(e) {
    console.log(e);
  }
}
