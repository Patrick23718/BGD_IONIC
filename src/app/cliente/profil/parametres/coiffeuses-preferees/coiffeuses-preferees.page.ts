import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PreferedService } from 'src/app/services/prefered.service';

@Component({
  selector: 'app-coiffeuses-preferees',
  templateUrl: './coiffeuses-preferees.page.html',
  styleUrls: ['./coiffeuses-preferees.page.scss'],
})
export class CoiffeusesPrefereesPage implements OnInit {
  items: any[] = [];
  constructor(public location: Location, private like: PreferedService) {}

  myBackButton() {
    this.location.back();
  }

  ngOnInit() {}
  getCoiffeuses() {
    this.like.getAllPrefered().subscribe((res: any) => {
      this.items = res;
      console.log(res);
    });
  }

  ionViewWillEnter() {
    this.getCoiffeuses();
  }

  remove(id: string) {
    this.like.removePrefered(id).subscribe((res: any) => {
      this.getCoiffeuses();
      console.log(res);
    });
  }
}
