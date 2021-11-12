import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etrecoiffeuse',
  templateUrl: './etrecoiffeuse.page.html',
  styleUrls: ['./etrecoiffeuse.page.scss'],
})
export class EtrecoiffeusePage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
}
