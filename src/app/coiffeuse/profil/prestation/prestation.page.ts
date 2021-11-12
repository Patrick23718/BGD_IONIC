import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.page.html',
  styleUrls: ['./prestation.page.scss'],
})
export class PrestationPage implements OnInit {
  items = [
    {
      title: 'Tissage',
      prix: 40,
    },
    {
      title: 'tresses pour enfants',
      prix: 55,
    },
    {
      title: 'braids',
      prix: 60,
    },
    {
      title: 'nattes collés',
      prix: 75,
    },
  ];
  constructor(private location: Location) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
}
