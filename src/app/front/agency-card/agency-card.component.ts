import { Component, OnInit, Input } from '@angular/core';
import {Agency} from '../../../backend/model/Agency';


@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
})
export class AgencyCardComponent implements OnInit {
  @Input() agencies: Agency;

  constructor() { }

  ngOnInit() {
  }

}
