import { NgModule } from '@angular/core';
import { OtpVerificationComponent } from './otp-verification.component';
import { OtpVerificationDirective } from './otp-verification.directive';

@NgModule({
  declarations: [OtpVerificationComponent, OtpVerificationDirective],
  imports: [],
  providers: [],
  exports: [OtpVerificationComponent]
})
export class OtpVerificationModule { }
