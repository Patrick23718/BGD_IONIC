import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coiffeuses-preferees',
  templateUrl: './coiffeuses-preferees.page.html',
  styleUrls: ['./coiffeuses-preferees.page.scss'],
})
export class CoiffeusesPrefereesPage implements OnInit {
  segment = 'prestations';
  items = [
    { title: 'Braids', checked: false },
    { title: 'nattes collées', checked: false },
    { title: 'tissages', checked: false },
    { title: 'Braids', checked: false },
    { title: 'pose perruque', checked: false },
    { title: 'crochet braids', checked: false },
  ];
  constructor(public location: Location) {}

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

  check() {
    let i = 0;
    for (i = 0; i < 6; i++) {
      this.items[i].checked = false;
    }
  }

  myBackButton() {
    this.location.back();
  }

  ngOnInit() {}
}
