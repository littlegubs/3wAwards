// This file should not be modified, as it can be overwritten by the generator.
// The 'TypeTagValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class TypeTagValidatorsBase extends FormGroupValidators {
    libelle = null;
    tags = [AppValidators.item];
}
