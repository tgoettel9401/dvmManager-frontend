import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from '../models/game';
import { TeamMatch } from '../models/team-match';

@Component({
  selector: 'app-team-match',
  templateUrl: './team-match.component.html',
  styleUrls: ['./team-match.component.css']
})
export class TeamMatchComponent implements OnInit {

  @Input() teamMatch: TeamMatch;

  // Table stuff
  displayedColumns: string[];
  dataSource: MatTableDataSource<Game>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.teamMatch.games);
    this.displayedColumns = ['boardNumber', 'playerHome', 'playerAway', 'result'];
  }

}
