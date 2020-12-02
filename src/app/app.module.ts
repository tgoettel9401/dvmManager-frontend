import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamMatchesComponent } from './team-matches/team-matches.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamMatchComponent } from './team-match/team-match.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { BroadcastDialogComponent } from './broadcast-dialog/broadcast-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamMatchesComponent,
    TeamMatchComponent,
    FileUploadDialogComponent,
    TeamsComponent,
    TeamComponent,
    BroadcastDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
