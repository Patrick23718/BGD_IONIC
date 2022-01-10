/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface Plage {
  id: string;
  plage: string;
}

export interface SearchDate {
  date: Date | null;
  plage: Plage;
}

@Component({
  selector: 'app-disponibilities',
  templateUrl: './disponibilities.page.html',
  styleUrls: ['./disponibilities.page.scss'],
})
export class DisponibilitiesPage implements OnInit {
  @Input() user: any;
  @Input() date_d: SearchDate = { date: null, plage: { id: '', plage: '' } };
  @Output() date_dChange = new EventEmitter<SearchDate>();
  currentMonth: number = 0;
  currentDay: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.currentDay = this.date_d.date ? this.date_d.date.getDate() : 1;
    this.currentMonth = this.date_d.date ? this.date_d.date.getMonth() : 0;
  }

  onMonthChange() {
    let date = this.date_d.date ?? new Date();
    date.setMonth(this.currentMonth);
    this.date_d = { ...this.date_d, date: date };
  }

  onDayChange() {
    let date = this.date_d.date ?? new Date();
    date.setDate(this.currentDay);
    this.date_d = { ...this.date_d, date: date };
  }
}
