// This file should not be modified, as it can be overwritten by the generator.
// The 'TagValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class TagValidatorsBase extends FormGroupValidators {
    libelle = null;
    agencies = [AppValidators.item];
    clients = [AppValidators.item];
    projects = [AppValidators.item];
    members = [AppValidators.item];
    type = [AppValidators.item];
}
