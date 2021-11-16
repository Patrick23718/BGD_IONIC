import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.page.html',
  styleUrls: ['./resultat-recherche.page.scss'],
})
export class ResultatRecherchePage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  myBackButton() {
    this.location.back();
  }

}
