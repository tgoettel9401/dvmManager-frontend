import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMatchesComponent } from './team-matches/team-matches.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/teamMatches', pathMatch: 'full' },
  { path: 'teamMatches', component: TeamMatchesComponent },
  { path: 'teams', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
