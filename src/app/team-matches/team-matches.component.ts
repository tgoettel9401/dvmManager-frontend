import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { TeamMatch } from '../models/team-match';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.css']
})
export class TeamMatchesComponent implements OnInit {

  teamMatches: TeamMatch[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTeamMatches();
  }

  getTeamMatches(): void {
    interval(2000).pipe(
      startWith(0),
      switchMap(() => this.dataService.getTeamMatches()))
    .subscribe(
      data => this.teamMatches = data,
      error => console.log(error)
    );
  }



}
