import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coiffeuses-preferees',
  templateUrl: './coiffeuses-preferees.page.html',
  styleUrls: ['./coiffeuses-preferees.page.scss'],
})
export class CoiffeusesPrefereesPage implements OnInit {


  items = [
    {title:'Braids'},
    {title:'nattes collées'},
    {title:'tissages'},
    {title:'Braids'},
    {title:'pose perruque'},
    {title:'crochet braids'},
  ]
  constructor(public location : Location) { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  myBackButton(){
    this.location.back()
  }

  ngOnInit() {
  }

}
