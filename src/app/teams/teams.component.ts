import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Team } from '../models/team';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    interval(2000).pipe(
      startWith(0),
      switchMap(() => this.dataService.getTeams()))
    .subscribe(
      data => this.teams = data,
      error => console.log(error)
    );
  }

}
