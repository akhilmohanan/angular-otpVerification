import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {

  constructor() { }

  public isBackspace(key) {
    return key === 'Backspace';
  }

}
