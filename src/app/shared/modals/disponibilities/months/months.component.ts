/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-class-suffix */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

declare const initDrawer: any;

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss'],
})
export class MonthsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: any;
  months: string[] = [
    '',
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];
  @Input() currentMonth: number = 1;
  @Output() currentMonthChange = new EventEmitter<number>();
  @Output() onChange = new EventEmitter<number>();
  carousel: any = { currentItem: 0 };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.carousel = initDrawer(
    //   this.container.nativeElement,
    //   3,
    //   1,
    //   false,
    //   false,
    //   500000000000,
    //   false,
    //   200
    // );
    // this.carousel.gotToItem(this.currentMonth);
  }

  selectMonth(month: number) {
    this.currentMonth = month;
    this.currentMonthChange.emit(this.currentMonth);
  }

  previous() {
    if (this.carousel.currentItem !== 0) {
      this.carousel.previous();
      this.currentMonth = this.carousel.currentItem;
      this.currentMonthChange.emit(this.currentMonth);
      this.onChange.emit();
    }
  }

  next() {
    if (this.carousel.currentItem !== 11) {
      this.carousel.next();
      this.currentMonth = this.carousel.currentItem;
      this.currentMonthChange.emit(this.currentMonth);
      this.onChange.emit();
    }
  }
}
