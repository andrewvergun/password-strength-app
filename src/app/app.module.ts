import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Include FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
