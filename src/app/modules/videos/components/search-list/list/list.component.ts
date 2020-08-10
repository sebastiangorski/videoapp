import { Component, OnInit } from '@angular/core';
import { ListStyleService } from '../../../../common/services/list-style.service';
import { ListService } from '../../../services/list.service';
import { FormControl } from '@angular/forms';
import { YouTubeVideo } from '../../../../common/models/youtube.model';
import { VimeoVideo } from '../../../../common/models/vimeo.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  grid: boolean = true;
  // filters = new FormControl();
  filtersList: string[] = ['Ulubione', 'YouTube', 'Vimeo'];
  selectedFilter;

  // sorting = new FormControl();
  sortingList: string[] = ['Ostatnio dodane', 'Najstarsze'];

  videosList: (YouTubeVideo | VimeoVideo)[];
  videosList$: BehaviorSubject<(YouTubeVideo | VimeoVideo)[]>

  constructor(private listStyleService: ListStyleService,
              private listService: ListService) {
  }

  ngOnInit(): void {
    this.listStyleService.isGridList.subscribe((isGrid: boolean) => this.grid = isGrid);
    this.listService.videosList$.subscribe(videoList => this.videosList = videoList);
  }

  getVideosList(): void {
    this.listService.videosList$.subscribe(videoList => this.videosList = videoList);
  }

  likeVideo(): void {

  }

  removeVideo(videoID: string): void {
    const removeIndex = this.videosList.map(video => video.videoID).indexOf(videoID);
    this.videosList.splice(removeIndex, 1);
    this.listService.updateList(this.videosList);
  }

  filterList(): void {
    console.log(this.selectedFilter);
  }

}
