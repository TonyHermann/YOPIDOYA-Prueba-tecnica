import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor (
    private http: HttpClient
  ) {

  }

  getContributors(data:string) {
    return this.http.get(`https://api.github.com/repos/${data}/contributors`)

  }
}
