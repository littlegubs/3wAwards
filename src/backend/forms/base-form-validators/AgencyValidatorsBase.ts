// This file should not be modified, as it can be overwritten by the generator.
// The 'AgencyValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class AgencyValidatorsBase extends FormGroupValidators {
    name = null;
    country = null;
    address = null;
    addressComplement = null;
    zipcode = null;
    phone = null;
    fax = null;
    city = null;
    description = null;
    internalNotice = null;
    creationDate = [CustomValidators.date];
    websiteUrl = null;
    tva = null;
    duns = null;
    typeAgency = [AppValidators.item];
    member = [AppValidators.item];
    projects = [AppValidators.item];
    tags = [AppValidators.item];
    image = [AppValidators.item];
}
