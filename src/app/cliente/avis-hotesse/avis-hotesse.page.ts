import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis-hotesse',
  templateUrl: './avis-hotesse.page.html',
  styleUrls: ['./avis-hotesse.page.scss'],
})
export class AvisHotessePage implements OnInit {

  constructor(public location : Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
