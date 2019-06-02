import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {


  public numericKeyCodes = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'];
  public alalphabetsKeyCode = 'abcdefghijklmnopqrstuvwxyz'.split('').map(alalphabet => 'key' + alalphabet.toUpperCase());
  public alphanumericKeyCode = this.numericKeyCodes.concat(this.alalphabetsKeyCode);
  public spicalKeyCodes = ['ShiftRight', 'ShiftRight', 'Backspace', 'Delete'];

  constructor() { }

  public acceptCharacter( keyCode, isAlphanumeric = true) {
    return isAlphanumeric ? (this.alphanumericKeyCode.includes(keyCode) || this.spicalKeyCodes.includes(keyCode)) :
                      (this.numericKeyCodes.includes(keyCode) || this.spicalKeyCodes.includes(keyCode));
  }

  public isBackspace(key) {
    return key === 'Backspace';
  }

}
