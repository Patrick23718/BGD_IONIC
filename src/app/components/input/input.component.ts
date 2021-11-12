import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type = 'text'; // set default type be text
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onKeyUp = new EventEmitter<string>();

  focused: boolean;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
  ngOnInit(): void {}

  getInputValue(val: any) {
    console.log(val);
    this.onKeyUp.emit('test');
  }
}
