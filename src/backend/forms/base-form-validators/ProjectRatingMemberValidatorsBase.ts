// This file should not be modified, as it can be overwritten by the generator.
// The 'ProjectRatingMemberValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class ProjectRatingMemberValidatorsBase extends FormGroupValidators {
    date = [CustomValidators.date];
    member = [AppValidators.item];
    project = [AppValidators.item];
    rating = [AppValidators.item];
    isVoteJudge = [AppValidators.boolean];
}
