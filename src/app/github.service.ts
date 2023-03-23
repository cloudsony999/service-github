import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private client:HttpClient) {
    console.log('I am constructor of the service class');
   }

   getRepos(userName:string):Observable<Repos[]> {
    return this.client.get<Repos[]>('https://api.github.com/users/'+userName+'/repos');
   }
}
