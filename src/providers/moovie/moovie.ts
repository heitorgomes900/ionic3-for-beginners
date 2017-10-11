import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath:string = "https://api.themoviedb.org/3";
  private key:string = "4a651d4add62e819a95ae0b98bb29d27";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  public getLatestMovies():any{
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.key);
  }
}
