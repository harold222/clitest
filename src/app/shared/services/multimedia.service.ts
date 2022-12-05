import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  // public callback: EventEmitter<any> = new EventEmitter<any>();

  public audio?: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  // public obs$: Observable<any> = new Observable();
  // public obs$: BehaviorSubject<any> = new BehaviorSubject('inicializar');

  constructor() {
    // public obs$: Observable<any> = new Observable();
    // this.obs$ = new Observable((observer: Observer<any>) => {
    //   observer.next()
    // })

    // public obs$: Subject<any> = new Subject();
    // this.obs$.next('test')

  }



}
