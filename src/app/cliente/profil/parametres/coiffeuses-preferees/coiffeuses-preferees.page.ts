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
    {title:'Braids'},
    {title:'nattes collées'},
    {title:'tissages'},
    {title:'Braids'},
    {title:'pose perruque'},
    {title:'crochet braids'},
  ]
  constructor(public location : Location) { }

  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

  myBackButton(){
    this.location.back()
  }

  ngOnInit() {
  }

}
