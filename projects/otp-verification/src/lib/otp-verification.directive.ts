import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[angularOnlyNumber]'
})

export class OtpVerificationDirective {

  @Input() isAlphanumeric = true;

  public alphabetsKeyCode = 'abcdefghijklmnopqrstuvwxyz'.split('').map(alalphabet => 'Key' + alalphabet.toUpperCase());
  public numericKeyCodes = [];

  constructor() {
    for (const digit of '0123456789'.split('')) {
      this.numericKeyCodes.push('Digit' + digit);
      this.numericKeyCodes.push('Numpad' + digit);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    // Ensure that it is a number and stop the keypress
    if (!this.isAlphanumeric && (e.shiftKey || !this.numericKeyCodes.includes(e.code))) {
      e.preventDefault();
    }
    if (this.isAlphanumeric && !(this.numericKeyCodes.includes(e.code) || this.alphabetsKeyCode.includes(e.code))) {
      e.preventDefault();
    }
  }
}

