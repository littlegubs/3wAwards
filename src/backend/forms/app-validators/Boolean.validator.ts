import { AbstractControl, ValidatorFn } from '@angular/forms';

// This validator always returns null, i.e. valid = true
// Its purpose is to differenciate boolean properties for Form.get()
// because when property is null, the value in the form is an empty string.
// The backend requires fires an error in this case.
// In the Form.get() method, it is not possible to guess source type from the
// empty string. The only way (for now) to guess that the property is a boolean
// is to add this fake validator and read it in Form.get().
// 
// In other words, not set booleans are set to null. If you want to force the
// value to false, change the object value before calling makeForm, or in the
// class definition.
export const boolean: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  return null;
}
