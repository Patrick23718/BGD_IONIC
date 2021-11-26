import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(private location : Location) {}

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
