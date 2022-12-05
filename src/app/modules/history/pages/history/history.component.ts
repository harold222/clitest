import { Component, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from '../../../../core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  
  public results: Observable<any> = of([]);

  constructor(private searchService: SearchService) {
  }

  receiveData(event: string): void {
    this.results = this.searchService.searchTracks$(event);
  }

}
