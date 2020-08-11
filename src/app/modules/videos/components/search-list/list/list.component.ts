import { Component, OnInit } from '@angular/core';
import { ListStyleService } from '../../../../common/services/list-style.service';
import { ListService } from '../../../services/list.service';
import { YouTubeVideo } from '../../../../common/models/youtube.model';
import { VimeoVideo } from '../../../../common/models/vimeo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  grid: boolean = true;
  filtersList: string[] = ['Brak', 'Ulubione'];
  sortingList: string[] = ['Ostatnio dodane', 'Najstarsze'];

  videosList: (YouTubeVideo | VimeoVideo)[];

  constructor(private listStyleService: ListStyleService,
              private listService: ListService) {
  }

  ngOnInit(): void {
    this.listStyleService.isGridList.subscribe((isGrid: boolean) => this.grid = isGrid);
    this.getVideosList();
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

  filterList(selectedFilter): void {
    if (selectedFilter.value === 'Ulubione') {
      const filteredByFavorites = this.videosList.filter(video => {
        return video.favorite;
      });
      this.listService.updateList(filteredByFavorites);
    }

    if (selectedFilter.value === 'Brak') {
      this.listService.loadDemoList();
      this.getVideosList();
      }
    }

    sortList(selectedSorting): void {
      if (selectedSorting.value === 'Ostatnio dodane') {
        const sortedByNewst = this.videosList.sort((a, b) => {
          return (b.addedAt as any) - (a.addedAt as any);
        });
        this.listService.updateList(sortedByNewst);
      }

      if (selectedSorting.value === 'Najstarsze') {
        const sortedByOldest = this.videosList.sort((a, b) => {
          return (a.addedAt as any) - (b.addedAt as any);
        });
        this.listService.updateList(sortedByOldest);
      }
    }

}
