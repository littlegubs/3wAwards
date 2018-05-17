import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../backend/services';
import {Agency, Member} from '../../../backend/model';
import {AuthService} from '../../auth.service';
import {TokenInterface} from '../../tokenInterface';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
})
export class MemberProfileComponent implements OnInit {
  member: Member;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  projectsGotAward;

  constructor(private route: ActivatedRoute, private membersService: MembersService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.membersService.get(this.userInfo.id).subscribe(
      res => {
        this.member = res;
        console.log(this.member);
        this.projectsGotAward = this.awardsByAgency().concat(this.awardsByClient());
      },
      err => {
      }
    );
  }

  awardsByAgency() {
    let awardsByAgencies;
    const projectsGotAwardByAgency  = [];
    for (let i = 0; i < this.countAgencies(); i++) {
      for (let j = 0; j < this.countProjectsByAgency(); j++) {
        if (this.member.agencies[i].projects[j] !== undefined) {
          awardsByAgencies = this.member.agencies[i].projects[j].awards;
          projectsGotAwardByAgency.push(this.member.agencies[i].projects[j].projectName, awardsByAgencies);
        }
      }
    }
    return projectsGotAwardByAgency;
  }

  awardsByClient() {
    let awardsByClients;
    const projectsGotAwardByClient  = [];
    for (let i = 0; i < this.countClients(); i++) {
      for (let j = 0; j < this.countProjectsByClient(); j++) {
        if (this.member.clients[i].projects[j] !== undefined) {
          awardsByClients = this.member.clients[i].projects[j].awards;
          projectsGotAwardByClient.push(this.member.clients[i].projects[j].projectName, awardsByClients);
        }
      }
    }
    return projectsGotAwardByClient;
  }

  countAgencies() {
    return Object.keys(this.member.agencies).length;
  }

  countClients() {
    return Object.keys(this.member.clients).length;
  }

  countProjectsByAgency() {
    let numberProjectsByAgency = 0;
    for (let i = 0; i < this.countAgencies(); i++) {
      numberProjectsByAgency = numberProjectsByAgency + Object.keys(this.member.agencies[i].projects).length;
    }
    return numberProjectsByAgency;
  }

  countProjectsByClient() {
    let numberProjectsByClient = 0;
    for (let i = 0; i < this.countClients(); i++) {
      numberProjectsByClient = numberProjectsByClient + Object.keys(this.member.clients[i].projects).length;
    }
    return numberProjectsByClient;

  }

  deleteMember(member: Member) {
       this.membersService.remove(member).subscribe(
           res => {
               console.log('Sucess');
           },
           err => {
               console.log('error');
           }
        );
    }

}
