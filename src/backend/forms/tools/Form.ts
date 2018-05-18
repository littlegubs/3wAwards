import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { AppValidators } from '../app-validators';
import { FormGroupValidators } from './FormGroupValidators';
import { ValidationTypes } from './ValidationTypes';
import { FormGroupValidationMatcher } from '../FormGroupValidationMatcher';
import { FormGroupValidationMatcherBase } from '../FormGroupValidationMatcherBase';

export class Form<T> {
  public formGroup: FormGroup;
  protected types: ValidationTypes;
  protected validationMatcher: FormGroupValidationMatcherBase;
  protected sourceItem: T;

  constructor(
    private formBuilder: FormBuilder,
    item?: T,
    validationTypes?: ValidationTypes,
    validationMatcher?: FormGroupValidationMatcherBase
  ) {
    if (validationMatcher) {
      this.validationMatcher = validationMatcher;
    } else {
      this.validationMatcher = new FormGroupValidationMatcher();
    }
    if (item) this.set(item, validationTypes);
  }

  get group(): FormGroup { return this.formGroup; }

  set(item: T, validationTypes?: ValidationTypes): void {
    if (validationTypes) {
      this.types = validationTypes;
    } else {
      this.types = this.validationMatcher.get(item['_resource']);
    }
    this.sourceItem = item;
    this.formGroup = this.formBuilder.group(this.setFormGroupValues(item, new this.types.validator()));
  }

  get(): T {
    var emptyObject = new this.types.itemClass();
    var validator = new this.types.validator();
    var result = Object.assign(emptyObject, this.sourceItem, this.formGroup.value);
    for (let property in result) {
      if (Array.isArray(validator[property])) {
        if (
          (this.hasValidator(validator[property], CustomValidators.date)) ||
          (this.hasValidator(validator[property], AppValidators.item))
        ) {
          if (!result[property]) result[property] = null;
        }
        if (this.hasValidator(validator[property], AppValidators.boolean)) {
          if (result[property] === "") result[property] = null;
        }
      }
    }
    return result;
  }

  displayErrors(): void {
    if (!this.formGroup.valid) {
      for (let controlName in this.formGroup.controls) {
        let control = this.formGroup.controls[controlName];
        if (control.invalid && !control.touched) control.markAsTouched();
      }
    }
  }

  debugErrors() {
    if (this.formGroup.valid) {
      console.log('The form is valid');
      return;
    }
    for (let controlName in this.formGroup.controls) {
      let control = this.formGroup.controls[controlName];
      if (control.invalid && !control.touched) {
        console.log(controlName + ': valid = ' + control.valid + ', touched = ' + control.touched);
      }
    }
  }

  protected setFormGroupValues(item: T, group: FormGroupValidators): any {
    var groupForBuilder = {};
    for (let property in group) {
      // sometimes, constructors are kept
      if ((group[property] instanceof Function)) break;
      let value: string = '';
      if (item[property] !== undefined) {
        if (this.hasValidator(group[property], CustomValidators.date)) {
          value = this.formatDate(item[property]);
        } else {
          value = item[property];
        }
      }
      if (group[property]) {
        // property: [value, constraint] or property: [value, [constraints]]
        groupForBuilder[property] = [value, group[property]];
      } else {
        // property: value
        groupForBuilder[property] = value;
      }
    }
    return groupForBuilder;
  }

  protected formatDate(date: Date): string {
    if (typeof(date) === 'string') date = new Date(date);
    return (date ? date.toISOString().split('T')[0] : '');
  }

  protected hasValidator(validatorGroup: Array<any> | any, validator: any): boolean {
    if (!(validatorGroup instanceof Array)) validatorGroup = [validatorGroup];
    return (validatorGroup.indexOf(validator) !== -1);
  }
}
