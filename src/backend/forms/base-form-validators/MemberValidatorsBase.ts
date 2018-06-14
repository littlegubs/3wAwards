// This file should not be modified, as it can be overwritten by the generator.
// The 'MemberValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class MemberValidatorsBase extends FormGroupValidators {
    gender = null;
    firstName = null;
    lastName = null;
    birthday = [CustomValidators.date];
    country = null;
    isJudge = [AppValidators.boolean];
    tags = [AppValidators.item];
    favoriteProjects = [AppValidators.item];
    presentation = null;
    websiteUrl = null;
    function = null;
    newsletter = [AppValidators.boolean];
    optIn = [AppValidators.boolean];
    projectRatingMember = [AppValidators.item];
    clients = [AppValidators.item];
    requestsJudge = [AppValidators.item];
    agencies = [AppValidators.item];
    profilePicture = [AppValidators.item];
    username = null;
    email = null;
}
