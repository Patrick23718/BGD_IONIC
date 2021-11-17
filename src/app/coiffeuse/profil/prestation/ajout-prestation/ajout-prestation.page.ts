import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { PrestationModalPage } from 'src/app/components/prestation-modal/prestation-modal.page';
import { PrestationPage } from 'src/app/components/prestation/prestation.page';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-ajout-prestation',
  templateUrl: './ajout-prestation.page.html',
  styleUrls: ['./ajout-prestation.page.scss'],
})
export class AjoutPrestationPage implements OnInit {
  prestation = '';
  focused: boolean;
  tarif = null;
  user: any;
  constructor(
    private location: Location,
    private modalController: ModalController,
    private ngFire: AngularFirestore,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private localstorage: LocalStorageService,
    private router: Router
  ) {
    if (this.localstorage.get('utilisateur') !== null) {
      this.user = JSON.parse(this.localstorage.get('utilisateur'));
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  prestations = [
    {
      title: 'braids',
      checked: false,
      sub: [
        {
          title: 'braids courtes',
          img: '',
          checked: false,
        },
        {
          title: 'braids longues',
          img: '',
          checked: false,
        },
      ],
    },
    {
      title: 'fulani braids',
      checked: false,
      sub: [],
    },
    {
      title: 'vanilles (twists)',
      checked: false,
      sub: [],
    },
    {
      title: 'cornrows',
      checked: false,
      sub: [],
    },
    {
      title: 'nattes collées',
      checked: false,
      sub: [],
    },
    {
      title: 'bantu knots',
      checked: false,
      sub: [],
    },
    {
      title: 'senegales twist',
      checked: false,
      sub: [],
    },
    {
      title: 'piqués lãchés',
      checked: false,
      sub: [],
    },
    {
      title: 'crochet braids',
      checked: false,
      sub: [],
    },
    {
      title: 'tissages',
      checked: false,
      sub: [],
    },
    {
      title: 'fausses locks',
      checked: false,
      sub: [],
    },
    {
      title: 'lissages',
      checked: false,
      sub: [],
    },
    {
      title: 'soins',
      checked: false,
      sub: [],
    },
    {
      title: 'lace frontal',
      checked: false,
      sub: [],
    },
    {
      title: 'brushing',
      checked: false,
      sub: [],
    },
    {
      title: 'tresses enfants',
      checked: false,
      sub: [],
    },
    {
      title: 'coupes',
      checked: false,
      sub: [],
    },
    {
      title: 'chignon',
      checked: false,
      sub: [],
    },
    {
      title: 'coupes enfants',
      checked: false,
      sub: [],
    },
    {
      title: 'balayage',
      checked: false,
      sub: [],
    },
    {
      title: 'locks',
      checked: false,
      sub: [],
    },
    {
      title: 'pose perruque',
      checked: false,
      sub: [],
    },
  ];

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  async openReservationModal() {
    const modal = await this.modalController.create({
      component: PrestationPage,
      componentProps: {
        prestations: this.prestations,
      },
      cssClass: 'prestationModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        this.prestation = data.data;
      }
      console.log(data); // Here's your selected user!
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      position: 'top',
      mode: 'ios',
    });
    toast.present();
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async addPrestation() {
    const loading = await this.presentLoading();
    await loading.present();
    if (
      this.tarif === '' ||
      this.tarif === 0 ||
      isNaN(parseFloat(this.tarif)) ||
      this.prestation === ''
    ) {
      console.log('humm');
      loading.dismiss();
      await this.presentToast('Informations non correctes', 'danger');
    } else {
      this.ngFire
        .collection('planning')
        .add({
          uid: this.user.uid,
          prestation: this.prestation,
          tarif: this.tarif,
        })
        .then((res: any) => {
          console.log(res);
          this.router.navigateByUrl('/coiffeuse/profil/prestation');
        })
        .catch(async (err) => {
          console.log(err);
          await this.presentToast(JSON.stringify(err), 'danger');
        })
        .finally(() => {
          loading.dismiss();
        });
    }
  }
}
