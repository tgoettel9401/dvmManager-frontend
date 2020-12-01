import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  // Table stuff
  displayedColumns: string[];
  dataSource: MatTableDataSource<Player>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.team.players);
    this.displayedColumns = ['id', 'firstName', 'lastName', 'accessToken', 'liChessName'];
  }

}
