import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly url = environment.api;

  constructor(private http: HttpClient) {}

  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.url}/tracks?src=${term}`)
      .pipe(
        map((data: any) => data.data)
      );
  }

}
