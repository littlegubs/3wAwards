// This file should not be modified, as it can be overwritten by the generator.
// The 'ProjectValidators' class is here for customizations and will not be touched.

import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AppValidators } from '../app-validators';
import { FormGroupValidators } from '../tools/FormGroupValidators';

export class ProjectValidatorsBase extends FormGroupValidators {
    projectName = null;
    projectDescription = null;
    publicationDate = [CustomValidators.date];
    averageRating = [CustomValidators.number];
    averageOriginalityRatings = [CustomValidators.number];
    averageReadabilityRatings = [CustomValidators.number];
    averageErgonomicRatings = [CustomValidators.number];
    averageInteractivityRatings = [CustomValidators.number];
    averageQualityContentRatings = [CustomValidators.number];
    averageWeatlhFunctionalityRatings = [CustomValidators.number];
    averageReactivityRatings = [CustomValidators.number];
    averageUsersRatings = [CustomValidators.number];
    averageJudgeRatings = [CustomValidators.number];
    noticableDescription = null;
    status = null;
    projectRatingMember = [AppValidators.item];
    client = [AppValidators.item];
    agency = [AppValidators.item];
    target = [AppValidators.item];
    siteType = [AppValidators.item];
    tags = [AppValidators.item];
    credits = [AppValidators.item];
    members = [AppValidators.item];
    images = [AppValidators.item];
    awards = [AppValidators.item];
    projectUrl = null;
}
