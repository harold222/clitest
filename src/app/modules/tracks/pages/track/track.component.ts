import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.model';
import { TracksService } from '../../services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit, OnDestroy {

  trackOne: TrackModel[] = [];
  trackTwo: TrackModel[] = [];

  public listObs$: Subscription[] = [];

  constructor(private tracksService: TracksService) {
  }

  ngOnInit(): void {
    this.tracksService.getAllTracks$().subscribe(data => {
      this.trackOne = data;
    })

    this.tracksService.getAllRnadoms$().subscribe(
      data => this.trackTwo = data
    )

    // const observer$ = this.tracksService.data$.subscribe(tracks =>{
    //   this.trackOne = tracks;
    // });

    // const observer2$ = this.tracksService.dataRandom$.subscribe(tracks =>{
    //   this.trackTwo = [...this.trackTwo, ...tracks];
    // });

    // this.listObs$ = [observer$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObs$.forEach(obs => obs.unsubscribe());
  }
}
