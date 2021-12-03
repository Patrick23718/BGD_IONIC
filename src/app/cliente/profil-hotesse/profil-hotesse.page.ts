import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-hotesse',
  templateUrl: './profil-hotesse.page.html',
  styleUrls: ['./profil-hotesse.page.scss'],
})
export class ProfilHotessePage implements OnInit {

  constructor(
    public location : Location
  ) { }

  ngOnInit() {
  }

  myBackButton() {
    this.location.back();
  }

}
