import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.page.html',
  styleUrls: ['./accordion-item.page.scss'],
})
export class AccordionItemPage implements OnInit {

  @Input() title: string;
  showBody = false;
  constructor() { }

  ngOnInit() {
  }


}
