import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  signInUserAccount = new FormControl<string>('', [Validators.required]);
  signInUserPassword = new FormControl<string>('', [Validators.required]);

  signInForm = this.formBuilder.group({
    signInUserAccount: this.signInUserAccount,
    signInUserPassword: this.signInUserPassword
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Sets language from browser settings.
    this.setupLanguage();
  }

  private setupLanguage() {
    // Setups language using browser settings.
    //this.translateService.setDefaultLang(this.getLanguage(navigator.language));
    //this.translateService.use(this.getLanguage(navigator.language));
  }

  private getLanguage(language: string): string {
    console.log('SignInPageComponent #getLanguage() language:' + language);

    const CHAR_HYPHEN = '-';
    if (language.indexOf(CHAR_HYPHEN) > 0) {
      const splittedLanguage: string[] = language.split(CHAR_HYPHEN);
      console.log('SignInPageComponent #getLanguage() splittedLanguage[0]:' + splittedLanguage[0]);

      return splittedLanguage[0];
    }
    return language;
  }


}
