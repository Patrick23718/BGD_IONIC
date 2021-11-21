import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coiffeuses-preferees',
  templateUrl: './coiffeuses-preferees.page.html',
  styleUrls: ['./coiffeuses-preferees.page.scss'],
})
export class CoiffeusesPrefereesPage implements OnInit {

  constructor() { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  ngOnInit() {
  }

}
