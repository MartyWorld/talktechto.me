import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { episodesList } from "../../../../utils/episodes";

@Component({
    selector: 'app-latest-episodes',
    templateUrl: './latest-episodes.component.html',
    styleUrls: ['./latest-episodes.component.scss']
})
export class LatestEpisodesComponent implements OnInit {

    constructor(
        public router: Router
    ) {}
  episodesListArr = episodesList;
  episodes!: Array<any>;
  sortEpisodes() {
    console.log(this.router.url, this.episodesListArr, "adlsjdlkasjda");
    if (this.router.url === "/") {
        this.episodes = this.episodesListArr.reverse().slice(0, 8)
    } else {
        this.episodes = this.episodesListArr.reverse();
    }
  }
  ngOnInit(): void {
      this.sortEpisodes();
      console.log(this.episodes, "daslkdjaslkdjasldk")
    }

}
