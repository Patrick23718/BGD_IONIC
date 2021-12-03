import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
})
export class MessageDetailsPage implements OnInit {

  constructor(private location: Location) {}

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
