import { FormGroupValidationMatcherBase } from './FormGroupValidationMatcherBase';

/**
 * The role of this class is to provide class/validator tuples,
 * i.e. it helps to guess which validator use for the provided item.
 * Basis tuples are present in FormGroupValidationMatcherBase.
 * Here, you can add, remove and update validators per class.
 */
export class FormGroupValidationMatcher extends FormGroupValidationMatcherBase {
  setItems() {
    //this.items['Book'] = {itemClass: Book, validator: BookValidator};
  }
}
