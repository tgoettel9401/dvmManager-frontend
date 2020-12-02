import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMatch } from '../models/team-match';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) { }

  getTeamMatches(): Observable<TeamMatch[]> {
    return this.httpClient.get<TeamMatch[]>(this.baseUrl + 'api/getTeamMatches');
  }

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.baseUrl + 'api/getTeams');
  }

  performShutdown(): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'actuator/shutdown', null);
  }

  uploadLst(fileType: string, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    let url = '';
    if (fileType === 'lst' || fileType === 'Lst') {
      url = this.baseUrl + 'api/importSwissChessLstFile';
    }

    if (fileType === 'pgn' || fileType === 'Pgn') {
      url = this.baseUrl + 'api/importSwissChessPgnFile';
    }


    const request = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(request);
  }

  checkAccounts(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseUrl + 'api/getPlayersWithInvalidTokens');
  }

  createChallenges(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + 'api/createChallenges');
  }

  sendBroadcastMessage(message: string, adminToken: string): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'api/sendBroadcastMessage', { text: message, token: adminToken });
  }

}
