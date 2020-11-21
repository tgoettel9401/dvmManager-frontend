import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamMatchesComponent } from './team-matches/team-matches.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamMatchComponent } from './team-match/team-match.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMatchesComponent,
    TeamMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
