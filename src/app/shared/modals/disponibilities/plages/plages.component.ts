/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export interface Plage {
  id: string;
  plage: string;
}

@Component({
  selector: 'app-plages',
  templateUrl: './plages.component.html',
  styleUrls: ['./plages.component.scss'],
})
export class PlagesComponent implements OnInit, OnChanges {
  loading: boolean = false;
  @Input() label: string = 'Les créneaux';
  @Input() user: any = { id: '' };
  @Input() date: Date | null = new Date();
  @Input() currentDay: number = 1;
  @Input() currentMonth: number = 0;
  @Input() selectPlage: any;
  @Output() selectPlageChange = new EventEmitter<Plage>();
  plages: any[] = [{ id: 'gvjhvcj', plage: '10h-02' }];

  constructor(/*private planningService: PlaningService*/) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['currentDay'] !== undefined ||
      changes['currentMonth'] !== undefined
    ) {
      this.getUserPlanning();
    }
  }

  ngOnInit() {
    this.getUserPlanning();
  }

  setPlage(plage: Plage): void {
    this.selectPlage = plage;
    this.selectPlageChange.emit(plage);
  }

  getUserPlanning() {
    this.loading = true;
    let date = this.date;
    console.log(this.getDateFormat(date));
    let user_id = this.user ? this.user.id : 'none';
    // this.planningService
    //   .getPlanning(this.getDateFormat(date), user_id)
    //   .subscribe({
    //     next: (data: any[]) => {
    //       this.plages = data.map((item) => ({
    //         id: item.plage._id,
    //         plage: item.plage.plage,
    //       }));
    //       console.log('TTTTTTTT2');
    //     },
    //     error: (error) => {
    //       this.loading = false;
    //       console.error(
    //         'Error lors de la récupération des plages de la date : ',
    //         this.getDateFormat(date),
    //         error
    //       );
    //       this.plages = [];
    //     },
    //     complete: () => {
    //       this.loading = false;
    //     },
    //   });
  }

  getDateFormat(date: Date | null): string {
    if (date === null) {
      return '';
    }
    return date.toLocaleDateString().split('/').reverse().join('-');
  }
}
