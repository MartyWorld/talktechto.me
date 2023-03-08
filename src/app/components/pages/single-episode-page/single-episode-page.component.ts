import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import {ActivatedRoute} from "@angular/router";
import { episodesList } from 'src/utils/episodes';

@Component({
    selector: 'app-single-episode-page',
    templateUrl: './single-episode-page.component.html',
    styleUrls: ['./single-episode-page.component.scss']
})
export class SingleEpisodePageComponent implements OnInit {

  episode: any = null;
  constructor(private route: ActivatedRoute) {  }
  episodeId = "";
  episodeIframe = "https://open.spotify.com/embed/track/3nqQXoyQOWXiESFLlDF1hG?utm_source=generator";
  autoplay = true;
  ngOnInit(): void {
    //@ts-ignore
    this.episode = episodesList.find(o => o.title.split(' ').join('-').toLowerCase() === this.route.snapshot.params.id);
    this.episodeId = this.episode.title
    if (this.episode) {
      this.episodeIframe = this.episode.iframeUrl;
    }
  }
}
