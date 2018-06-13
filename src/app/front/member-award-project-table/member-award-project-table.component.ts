import {Component, Input, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-member-award-project-table',
  templateUrl: './member-award-project-table.component.html',
  styleUrls: ['./member-award-project-table.component.scss']
})
export class MemberAwardProjectTableComponent implements AfterViewInit {
  @Input() dataSource: any;
  @Input() displayedColumns: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

    ngAfterViewInit() {
    if (this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator;
    }
    }

}
