import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <div> <ion-content select="app-accordion-item"></ion-content></div>
  `,
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
