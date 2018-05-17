import { AbstractControl, ValidatorFn } from '@angular/forms';

// This validator always returns null, i.e. valid = true
// Its purpose is to differenciate object items and scalar types for Form.get()
// because with items (for example a Book in a Review), when optional item is
// not set, an empty string is returned by the form group.
// The backend requires the value to be null.
// In the Form.get() method, it is not possible to guess source type from the
// empty string. The only way (for now) to guess that the property is an item
// is to add this fake validator and read it in Form.get().
export const item: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  return null;
}
