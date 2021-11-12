import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutprestation',
  templateUrl: './ajoutprestation.page.html',
  styleUrls: ['./ajoutprestation.page.scss'],
})
export class AjoutprestationPage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
}
