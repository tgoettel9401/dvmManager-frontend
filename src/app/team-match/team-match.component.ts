import { Component, Input, OnInit } from '@angular/core';
import { TeamMatch } from '../models/team-match';

@Component({
  selector: 'app-team-match',
  templateUrl: './team-match.component.html',
  styleUrls: ['./team-match.component.css']
})
export class TeamMatchComponent implements OnInit {

  @Input()
  teamMatch: TeamMatch;

  constructor() { }

  ngOnInit(): void {
  }

}
