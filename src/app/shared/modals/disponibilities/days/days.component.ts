/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @angular-eslint/component-class-suffix */
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

declare const initDrawer: any;

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit, AfterViewInit, OnChanges {
  id = 'date--chooser_07084';
  @ViewChild('container') container: any;
  carousel: any = { currentItem: 0 };
  @Input() date: Date = new Date();
  @Input() currentMonth: number = 1;
  @Input() currentDay: number = 1;
  @Output() currentDayChange = new EventEmitter<number>();
  @Output() onChange = new EventEmitter<number>();
  daysOfMonths: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.daysOfMonths = this.udpateDay();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentMonth']) {
      this.daysOfMonths = this.udpateDay();
      this.carousel.resetAllContent(
        '#' + this.id,
        this.constructContent(this.daysOfMonths)
      );
      this.currentDay = 1;
    }
  }

  constructContent(d: number[]) {
    let content = '';
    d.forEach((element) => {
      content += `
            <div class="flex justify-center items-center">
                <button
                    class="flex justify-center items-center rounded-full w-6 h-6 text-xs md:w-8 md:h-8 p-2 md:text-base ${
                      element === 0 ? 'text-white' : 'text-gray-500 border'
                    }"
                >
                    ${element}
                </button>
            </div>`;
    });
    return content;
  }

  udpateDay() {
    let year = this.date.getFullYear();
    let lastDay = new Date(year || 1, this.currentMonth + 1, 0).getDate();
    let d = [0];
    for (let i = 0; i <= lastDay; i++) {
      d.push(i);
    }
    return d;
  }

  ngAfterViewInit(): void {
    this.carousel = initDrawer(
      this.container.nativeElement,
      5,
      1,
      false,
      false,
      500000000000,
      false,
      200
    );
    this.carousel.gotToItem(this.currentDay - 1);
  }

  previous() {
    if (this.carousel.currentItem !== 0) {
      this.carousel.previous();
      this.currentDay = this.carousel.currentItem + 1;
      this.currentDayChange.emit(this.currentDay);
      this.onChange.emit(this.currentDay);
    }
  }

  next() {
    if (this.carousel.currentItem !== this.daysOfMonths.length - 3) {
      this.carousel.next();
      this.currentDay = this.carousel.currentItem + 1;
      this.currentDayChange.emit(this.currentDay);
      this.onChange.emit(this.currentDay);
    }
  }
}
