import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

const emailAndPasswordFormValidator = {
  email: ['', Validators.compose([Validators.required, Validators.email])],
  password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
}

@Injectable()
export class FormsValidatorProvider {

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  retrieveEmailAndPasswordFormValidator() {
    return this.formBuilder.group(emailAndPasswordFormValidator);
  }

}
