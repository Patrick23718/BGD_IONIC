import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Message } from 'src/app/interfaces/message';
import { ChatService } from 'src/app/services/chat.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  items = [{}, {}, {}, {}, {}, {}, {}, {}];
  users = [];
  user: any;
  constructor(
    private fbAuth: AngularFireAuth,
    private location: Location,
    private chatService: ChatService,
    // private userService: UtilisateurService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // this.fbAuth.authState.subscribe(async (authState) => {
    //   this.user = authState;
    //   this.userService
    //     .getAllUser()
    //     .get()
    //     .then((querySnapshot) => {
    //       this.users = [];
    //       querySnapshot.forEach((doc) => {
    //         this.users.push({
    //           id: doc.id,
    //           data: doc.data(),
    //         });
    //         console.log(this.users);
    //       });
    //     });
    // .subscribe((res: any) => {
    //   console.log(res);
    //   // res.forEach((element) => {
    //   //   // eslint-disable-next-line eqeqeq
    //   //   if (element.uid != authState.uid) {
    //   //     this.users.push(element);
    //   //   }
    //   // });
    // });
    // });
  }
  myBackButton() {
    this.location.back();
  }

  goToMessages(oid: string, prenom: string) {
    this.navCtrl.navigateForward('coiffeuse/message/message-details', {
      state: { oid, uid: this.user.uid, user: prenom },
    });
  }
}
