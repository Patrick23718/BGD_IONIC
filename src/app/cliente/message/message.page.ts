import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  items = [];
  utilisateurs = [];

  constructor(
    private location: Location,
    private utilisateurService: UtilisateurService
  ) {
    this.utilisateurService.getUsers().subscribe((res: any) => {
      console.log(res);
      this.utilisateurs = res;
    });
  }

  myBackButton() {
    this.location.back();
  }

  ngOnInit() {}
}
