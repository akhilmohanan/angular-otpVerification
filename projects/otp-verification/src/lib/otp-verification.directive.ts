import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[angularOnlyNumber]'
})

export class OtpVerificationDirective {

  @Input() isAlphanumeric = true;

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (!this.isAlphanumeric && (e.shiftKey || !(/Digit[0-9]/.test(e.code) || /Numpad[0-9]/.test(e.code)))) {
      e.preventDefault();
    }
    if (this.isAlphanumeric && !/Key[A-Z]/.test(e.code)) {
      e.preventDefault();
    }
  }
}

