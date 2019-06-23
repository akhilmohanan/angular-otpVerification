import { Component, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { OtpVerificationService } from './otp-verification.service';

@Component({
  selector: 'ng-otp',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent {

  @Input() isAlphanumeric: boolean;

  @Output() otpOut = new EventEmitter();

  @ViewChild('otp') otpVal: ElementRef;

  public specialKeys = [
    'CapsLock', 'ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight',
    'AltLeft' , 'AltRight'   , 'Escape'      , 'Backquote', 'ArrowUp'   ,
    'Space'   , 'ArrowDown'  , 'Delete'      , 'Insert'   , 'End'       ,
    'Home'    , 'PageDown'   , 'ArrowRight'  , 'WakeUp'
  ];

  public inputLimt = [];

  constructor(
    private otpVerificationService: OtpVerificationService
  ) { }

  public nextDigit(event, next, previous, current) {
    if (this.specialKeys.includes(event.code)) {
      return;
    }
    if (!this.otpVerificationService.isBackspace(event.key) && !this.isAlphanumeric && isNaN(event.key)) {
      current.value = '';
      return;
    }
    if (this.otpVerificationService.isBackspace(event.key)) {
      if (current.value !== '' && previous) {
        current.value = '';
        previous.focus();
      } else if (previous) {
        previous.value = '';
        previous.focus();
      } else {
        current.value = '';
      }
    } else if (!this.otpVerificationService.isBackspace(event.key)) {
      if (event.key.length === 1) {
        if (event.getModifierState('CapsLock')) {
          current.value = event.key.toUpperCase();
        } else {
          current.value = event.key;
        }
      }
      setTimeout(() => {
        if (next) {
          next.focus();
        }
      });
    }
    this.returnOtp();
  }

  public returnOtp() {
    let otp = '';
    Array.from(this.otpVal.nativeElement.children).forEach(child => {
      if (!child['value']) { return; }
      otp += child['value'];
    });

    if (otp.length === 4) {
      this.otpOut.emit(otp);
    }
  }

}
