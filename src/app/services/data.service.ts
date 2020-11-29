import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMatch } from '../models/team-match';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) { }

  getTeamMatches(): Observable<TeamMatch[]> {
    return this.httpClient.get<TeamMatch[]>(this.baseUrl + 'api/getTeamMatches');
  }

  performShutdown(): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'actuator/shutdown', null);
  }

}
