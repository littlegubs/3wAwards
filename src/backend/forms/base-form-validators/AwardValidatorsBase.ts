// This file should not be modified, as it can be overwritten by the generator.
// The 'AwardValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class AwardValidatorsBase extends FormGroupValidators {
    date = [CustomValidators.date];
    category = [AppValidators.item];
    type = null;
    project = [AppValidators.item];
}
