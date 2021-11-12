import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/interfaces/message';
import { ChatService } from 'src/app/services/chat.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
})
export class MessageDetailsPage implements OnInit {
  uid: string;
  otherId: string;
  user: any;
  msg = '';
  messages = [];
  constructor(
    private router: Router,
    private chatService: ChatService,
    private userService: UtilisateurService,
    private location: Location
  ) {
    if (router.getCurrentNavigation().extras.state) {
      const ids = this.router.getCurrentNavigation().extras.state;
      this.uid = ids.uid;
      this.otherId = ids.oid;
      this.user = ids.user;
    }

    this.chatService.getAllMessages().subscribe((res: any[]) => {
      this.messages = [];
      res.forEach((element) => {
        this.messages.push(element);
      });
      console.log(this.messages);
    });
  }
  ngOnInit() {}

  myBackButton() {
    this.location.back();
  }

  onClick() {
    const message: Message = {
      fromId: this.uid,
      toId: this.otherId,
      message: this.msg,
      createdAt: new Date(Date.now()),
    };
    this.chatService.sendMessage(message);
    this.msg = '';
    console.log(message.message);
    console.log(message.fromId);
    console.log(message.toId);
  }
}
