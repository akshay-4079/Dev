import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint="https://getdevopsdata.azurewebsites.net/api/";
const httpOptions = {
  headers: new HttpHeaders({
    
    'Content-Type':  'string'
  })
};  

var currentProjectName=localStorage.getItem("CurrProName");
var currentProjectId=localStorage.getItem("CurrentId");
var currentTeamId=localStorage.getItem("CurrentTeam");
var currentTeamName=localStorage.getItem("CurrTeamName");
var currentIterationId=localStorage.getItem("IterationId");
var sprinturl=currentProjectName+'0'+currentTeamName+'0';
var workitemurl=currentProjectName+'!'+currentTeamName+'!'+currentIterationId;

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) {}
  private extractData(res: Response) {
  let body = res;
  return body || { };
   }

   
GetProjects():Observable<any>{
return this.http.get(endpoint+'Projects/1').pipe(map(this.extractData));
}
GetTeams():Observable<any>{
  return this.http.get(endpoint+'Teams/'+currentProjectId).pipe(map(this.extractData));
  }
GetSprints():Observable<any>{
    return this.http.get(endpoint+'Sprints/'+sprinturl).pipe(map(this.extractData));
    }
GetWorkItems():Observable<any>{
      return this.http.get(endpoint+'WorkItems/'+workitemurl).pipe(map(this.extractData));
      }
GetRelation():Observable<any>{
        return this.http.get(endpoint+'Relation/'+workitemurl).pipe(map(this.extractData));
      }
} 