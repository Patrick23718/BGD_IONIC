import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-frequentes',
  templateUrl: './questions-frequentes.page.html',
  styleUrls: ['./questions-frequentes.page.scss'],
})
export class QuestionsFrequentesPage implements OnInit {

  constructor(private location : Location) {}

  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }

}
