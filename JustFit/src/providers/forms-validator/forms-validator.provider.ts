import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable()
export class FormsValidatorProvider {

  private readonly signUpFormValidator = {
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  }

  private readonly changeProfileDataFormWithPasswordValidator = {
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    name: ['', Validators.compose([Validators.required])],
    surname: ['', Validators.compose([Validators.required])]
  }

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  retrieveSignUpFormValidator() {
    return this.formBuilder.group(this.signUpFormValidator);
  }

  retrieveChangeProfileDataFormWithPasswordValidator() {
    return this.formBuilder.group(this.changeProfileDataFormWithPasswordValidator);
  }
  
}
