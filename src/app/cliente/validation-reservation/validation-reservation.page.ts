/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/dot-notation */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { CalendarPage } from 'src/app/components/calendar/calendar.page';
import { ValidationPrestationPage } from 'src/app/components/validation-prestation/validation-prestation.page';
import { PrestationPage } from 'src/app/components/prestation/prestation.page';
import { DonneesBancairesPage } from 'src/app/shared/modals/donnees-bancaires/donnees-bancaires.page';
import { DisponibilitePage } from 'src/app/components/disponibilite/disponibilite.page';
import { Stripe } from '@ionic-native/stripe/ngx';
import { environment } from 'src/environments/environment';
import { PaiementService } from 'src/app/services/paiement.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PrestationService } from 'src/app/services/prestation.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.page.html',
  styleUrls: ['./validation-reservation.page.scss'],
})
export class ValidationReservationPage implements OnInit {
  focused: boolean;
  prestations = [];
  prestation = {
    prestation: {
      prestation: '',
    },
    tarif: null,
  };
  reduction = 0;
  users = {
    _id: '1',
    biographie: '',
    imageURL: '',
    prenom: '',
    ville: '',
  };
  espece = false;
  plage: any;
  date = '';
  bancaire = false;
  userSearch;
  code = '';
  loading = false;
  coupon = null;
  constructor(
    private location: Location,
    private router: Router,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private stripe: Stripe,
    private toastController: ToastController,
    public alertController: AlertController,
    public pay: PaiementService,
    private localstorage: LocalStorageService,
    private prestationService: PrestationService,
    private couponService: CouponService,
    private navCtrl: NavController
  ) {
    this.userSearch = JSON.parse(this.localstorage.get('search'));
    console.log(this.userSearch);
    // this.prestation.prestation = this.userSearch.prest;
    this.date = this.userSearch.date;
    this.plage = this.userSearch.plage;
  }

  getCouponCode() {
    this.loading = true;
    this.couponService.getCoupon(this.code).subscribe(
      (res: any) => {
        this.reduction = (this.prestation.tarif * res.amount) / 100;
        this.coupon = res;
        console.log(res);
        this.loading = false;
      },
      (err: any) => {
        this.reduction = 0;
        this.coupon = null;
        console.warn(err);
        this.loading = false;
      }
    );
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton() {
    this.location.back();
  }

  async openCalendarModal() {
    const modal = await this.modalController.create({
      component: DisponibilitePage,
      cssClass: 'calendarModal',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      // if (data.data !== '') {
      //   this.plage = data.data;
      //   this.date = this.plage.plage.text;
      // }
      // console.log(data); // Here's your selected user!
    });
  }

  async openPrestationModal() {
    const modal = await this.modalController.create({
      component: ValidationPrestationPage,
      cssClass: 'calendarModal',
      componentProps: {
        prestations: this.prestations,
      },
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

  async openCarteModal() {
    const modal = await this.modalController.create({
      component: DonneesBancairesPage,
      cssClass: 'bancaire-css',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      if (data.data !== '') {
        // this.prestation = data.data;
      }
      console.log(data); // Here's your selected user!
    });
  }

  goTo() {
    if (this.bancaire === true) {
      this.router.navigateByUrl(
        `cliente/acceuil/profil-hotesse/validation-reservation/${this.users._id}/validation-bancaire`
      );
    } else if (this.espece === true) {
      this.router.navigateByUrl(
        `cliente/acceuil/profil-hotesse/validation-reservation/${this.users._id}/validation-espece`
      );
    }
  }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.uid = params.uid;
    //   console.log(this.uid);
    // });

    const prestOBX = this.route.snapshot.data['prest'];
    prestOBX.subscribe((res: any) => {
      this.prestations = res;
      // this.prestation = this.prestations[0].prestation;
      console.log(res);
    });
    const profilOBX = this.route.snapshot.data['coiffeuse'];
    profilOBX.subscribe((res: any) => {
      this.users = res;
      this.prestationService
        .searchPrestCoif(res._id, this.userSearch.prest._id)
        .subscribe((ress: any) => {
          console.log(ress);
          this.prestation = ress[0];
        });
      // console.log(res);
    });

    const galerieOBX = this.route.snapshot.data['galeries'];
    galerieOBX.subscribe((res: any) => {
      // this.galeries = res.data;
      console.log(res);
    });
  }

  payWithStripe2() {
    const data = {
      reduction: this.coupon,
      prestation: this.prestation,
      date: new Date(this.date).toISOString(),
      plage: this.plage,
    };
    console.log(data);
  }

  payWithStripe() {
    const data = {
      reduction: this.coupon,
      prestation: this.prestation,
      date: new Date(this.date).toISOString(),
      plage: this.plage,
    };
    this.stripe.setPublishableKey(environment.STRIPE_PUBLIC_KEY);

    const cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2025,
      cvc: '220',
    };

    this.stripe
      .createCardToken(cardDetails)
      .then((token: any) => {
        console.log(token);
        this.pay.makePayment(token, data).subscribe(
          async (res: any) => {
            this.presentToast(
              `Paiemenet effectué avec succès.\nVotre réservation a été enrégistré`,
              'success'
            );
            const date =
              new Date(this.date).getFullYear() +
              '-' +
              (new Date(this.date).getMonth() + 1) +
              '-' +
              new Date(this.date).getDay();
            this.navCtrl.navigateForward(
              `/cliente/acceuil/profil-hotesse/profil-hotesse/validation-reservation/${this.users._id}/reservation-confirme/${this.plage.plage}/${this.prestation.prestation.prestation}/${this.users.prenom}/${date}`
            );
            // :plage/:prest/:coif/:date
            // const alert = await this.alertController.create({
            //   header: 'Félicitation',
            //   message: JSON.stringify(res),
            //   buttons: ['OK'],
            // });
            // await alert.present();
          },
          async (err: any) => {
            const alert = await this.alertController.create({
              header: 'Error',
              message: JSON.stringify(err),
              buttons: ['OK'],
            });
            await alert.present();
          }
        );
      })
      .catch(async (error) => {
        this.presentToast(JSON.stringify(error), 'danger');
        console.error(error);
        this.navCtrl.navigateForward(
          `/cliente/acceuil/profil-hotesse/profil-hotesse/validation-reservation/${this.users._id}/reservation-non-confirme`
        );
        // const alert = await this.alertController.create({
        //   header: 'Err public',
        //   message: JSON.stringify(error),
        //   buttons: ['OK'],
        // });
        // await alert.present();
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
}
