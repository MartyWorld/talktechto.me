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
  episodes = episodesList;
  sortEpisodes() {
    // console.log(this.router.url, episodesList.reverse(), "router");
    if (this.router.url === "/") {
        this.episodes = this.episodes.reverse().slice(0, 8)
    } else {
        this.episodes = this.episodes.reverse();
    }
  }
  ngOnInit(): void {
        this.sortEpisodes();
    }

}
