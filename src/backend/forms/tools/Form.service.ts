import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Form } from './Form';

@Injectable()
export class FormService  {
  constructor(private formBuilder: FormBuilder) {}

  makeForm<T>(item: T): Form<T> {
    return new Form<T>(this.formBuilder, item);
  }

}
