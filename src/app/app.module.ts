import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtpVerificationModule } from 'projects/otp-verification/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OtpVerificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
