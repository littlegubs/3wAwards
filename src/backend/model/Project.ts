import {ProjectBase} from './base/ProjectBase';
import {Client} from './Client';
import {Agency} from './Agency';
import {Member} from './Member';
import {Image} from './Image';
import {Award} from './Award';

export class Project extends ProjectBase {
  id: number;

  setProjectRatingMemberAtNull(): Project {
    this.projectRatingMember = [];
    return this;
  }

  setMembersatNull(): Project {
    this.members = new Member();
    this.members['@id'] = [];
    return this;
  }

  setImagesAtNull(): Project {
    this.images = new Image();
    this.images['@id'] = [];
    return this;
  }

  setAwardsAtNull(): Project {
    this.awards = new Award();
    this.awards['@id'] = [];
    return this;
  }

  setClientAtNull(): Project {
    this.client = new Client();
    this.client = null;
    return this;
  }

  setAgencyAtNull(): Project {
    this.agency = new Agency();
    this.agency = null;
    return this;
  }

  updateRatings(array: Array<number>) {
    this.averageJudgeRatings = array[0];
    this.averageUsersRatings = array[1];
    this.averageRating = array[2];
    this.averageOriginalityRatingsJudge = array[3];
    this.averageReadabilityRatingsJudge = array[4];
    this.averageNavigationRatingsJudge = array[5];
    this.averageInteractivityRatingsJudge = array[6];
    this.averageQualityContentRatingsJudge = array[7];
    this.averageWeatlhFunctionalityRatingsJudge = array[8];
    this.averageReactivityRatingsJudge = array[9];
    this.averageOriginalityRatingsMember = array[10];
    this.averageReadabilityRatingsMember = array[11];
    this.averageNavigationRatingsMember = array[12];
    this.averageInteractivityRatingsMember = array[13];
    this.averageQualityContentRatingsMember = array[14];
    this.averageWeatlhFunctionalityRatingsMember = array[15];
    this.averageReactivityRatingsMember = array[16];
  }
}
