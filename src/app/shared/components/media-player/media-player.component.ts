import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel} from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';  // se le conoce como programacion reactiva.

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    name: 'BB Official',
    album: 'Gioli y Assia',
    cover: '',
    url: 'https//localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaServices: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaServices.callBack.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion..', response)
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
      this.listObservers$.forEach(u => u.unsubscribe())
  }
}
