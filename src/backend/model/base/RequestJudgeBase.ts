// This file should not be modified, as it can be overwritten by the generator.
// The 'RequestJudge' class is here for customizations and will not be touched.

import { Member } from '../Member';

export class RequestJudgeBase {
  public static readonly _resource: string = 'request_judges';
  get _resource(): string { return RequestJudgeBase._resource; };

  message: string;
  member: Member;

  setMember(id: number): RequestJudgeBase {
    this.member = new Member();
    this.member.id = id;
    this.member['@id'] = '/members/' + id;
    return this;
  }

}
