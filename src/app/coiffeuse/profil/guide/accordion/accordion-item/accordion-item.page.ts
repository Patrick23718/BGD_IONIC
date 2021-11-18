import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.page.html',
  styleUrls: ['./accordion-item.page.scss'],
  // animations: [
  //   trigger('smoothCollapse', [
  //     state('initial', style({
  //       height: '0',
  //       overflow: 'hidden',
  //       opacity: '0',
  //       visibility: 'hidden'
  //     })),
  //     state('final', style({
  //       overflow: 'hidden'
  //     })),
  //     transition('initial<=>final', animate('250ms'))
  //   ]),
  //   trigger('rotatedState', [
  //     state('default', style({ transform: 'rotate(0)'})),
  //     state('rotated', style({ transform: 'rotate(180deg)'})),
  //     transition('default <=> rotated', animate('250ms'))
  //   ])
  // ]
})
export class AccordionItemPage implements OnInit {

  @Input() title: string;
  showBody = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}