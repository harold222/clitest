import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused';

  listObserver$: Subscription[] = [];

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {


    // const observer$ = this.multimediaService.callback
    //   .subscribe((res: TrackModel) =>{

    //   }
    // );

    // this.listObserver$.push(observer$);
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(sub => sub.unsubscribe());
  }

}
