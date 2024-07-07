import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: 'easy' | 'medium' | 'strong' = 'easy';

  checkPasswordStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length < 8) {
      this.passwordStrength = 'easy';
      return;
    }

    if ((hasLetters && hasDigits && hasSymbols)) {
      this.passwordStrength = 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'easy';
    }
  }
}
