import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackModel } from '../../../core/models/tracks.model';
// import * as dataRaw from '../../../data/data.json';
@Injectable({
  providedIn: 'root'
})
export class TracksService {
  
  public data$: Observable<TrackModel[]> = of([]);
  public dataRandom$: Observable<TrackModel[]> = of([]);
  private readonly url = environment.api;

  constructor(private http: HttpClient) {
    // const { data } = (dataRaw as any).default;
    // this.data$ = of(data);

    // this.dataRandom$ = new Observable((obs) => {
    //   const newTrack: TrackModel = {
    //     _id: 9,
    //     name: 'test',
    //     album: 'test',
    //     cover: 'test',
    //     url: 'test'
    //   };
    //   obs.next([newTrack])
    // });
  }

  getAllTracks$(): Observable<TrackModel[]> {
    return this.http.get<TrackModel[]>(`${this.url}/tracks`)
      .pipe(
        map((response: any) => response.data)
      )
  }

  getAllRnadoms$(): Observable<TrackModel[]> {
    return this.http.get<TrackModel[]>(`${this.url}/tracks`)
      .pipe(
        mergeMap(({ data }: any) =>
          this.skipById(data, 1)
        ),
        map((response: TrackModel[]) => response.reverse()),
        catchError(this.handleError)
      )
  }

  private skipById(tracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = tracks.filter(track => track._id !== id)
      resolve(listTmp);
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
