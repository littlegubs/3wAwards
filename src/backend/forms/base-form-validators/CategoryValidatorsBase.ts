// This file should not be modified, as it can be overwritten by the generator.
// The 'CategoryValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class CategoryValidatorsBase extends FormGroupValidators {
    libelle = null;
    awards = [AppValidators.item];
    ratings = [AppValidators.item];
}
