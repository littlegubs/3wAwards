import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Member} from '../../../backend/model/Member';
import {TokenInterface} from '../../tokenInterface';
import {MembersService} from '../../../backend/services/Members.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-member-award-project-table',
  templateUrl: './member-award-project-table.component.html',
})
export class MemberAwardProjectTableComponent implements AfterViewInit, OnInit {
    ELEMENT_DATA: Element[] = [];
    displayedColumns = ['name', 'type', 'libelle', 'date'];
    dataSource: any;
    member: Member;
    tokenStorage = localStorage.getItem('user_token');
    userInfo: TokenInterface;
    projectsGotAward;
    elementToPush = [];


    constructor(private membersService: MembersService, private authService: AuthService) {
    }
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.userInfo = this.authService.getUserInfo(this.tokenStorage);
        this.membersService.get(this.userInfo.id).subscribe(
            res => {
                this.member = res;
                this.projectsGotAward = this.awardsByAgency().concat(this.awardsByClient());
                this.fillElement();
                console.log(this.ELEMENT_DATA);
                console.log(ELEMENT_DATA_TEST);


            },
            err => {
            }
        );
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        console.log(this.dataSource);
    }
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    awardsByAgency() {
        let awardsByAgencies;
        const projectsGotAwardByAgency = [];
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
        const projectsGotAwardByClient = [];
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

    fillElement() {
        console.log('InFillElement');
        for (let i = 0; i < this.projectsGotAward.length; i++) {
            if (i % 2 !== 0) {
                for (let j = 0; j < this.projectsGotAward[i].length; j++) {
                    this.elementToPush.push({
                        name: this.projectsGotAward[i - 1],
                        type: this.projectsGotAward[i][j].type,
                        libelle: this.projectsGotAward[i][j].category.libelle,
                        date: this.projectsGotAward[i][j].date});
                }
            }
        }
        this.ELEMENT_DATA = this.elementToPush;
    }
}

export interface Element {
    name: string;
    date: string;
    type: string;
    libelle: string;
}

const ELEMENT_DATA_TEST: Element[] = [
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
    {name: '1', date: 'Hydrogen', type: '1.0079', libelle: 'H'},
];
