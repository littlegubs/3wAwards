import { FormGroupValidators } from './FormGroupValidators';

export class ValidationTypes {
  itemClass: new () => Object;
  validator: new () => FormGroupValidators;
}
