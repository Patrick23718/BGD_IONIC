import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inviter-amis',
  templateUrl: './inviter-amis.page.html',
  styleUrls: ['./inviter-amis.page.scss'],
})
export class InviterAmisPage implements OnInit {

  constructor(public location : Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back()
  }

}
