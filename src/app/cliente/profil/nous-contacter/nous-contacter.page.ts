import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.page.html',
  styleUrls: ['./nous-contacter.page.scss'],
})
export class NousContacterPage implements OnInit {

  focused : boolean
  constructor(public location : Location) { }

  ngOnInit() {
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton(){
    this.location.back()
  }

}
