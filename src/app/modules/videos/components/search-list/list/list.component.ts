import { Component, OnInit } from '@angular/core';
import { ListStyleService } from '../../../../common/services/list-style.service';
import { ListService } from '../../../services/list.service';
import { YouTubeVideo } from '../../../../common/models/youtube.model';
import { VimeoVideo } from '../../../../common/models/vimeo.model';
import { VideoEmbedComponent } from '../../../../common/components/popups/video-embed/video-embed.component';
import { MatDialog } from '@angular/material/dialog';

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
  demoList: (YouTubeVideo | VimeoVideo)[];

  constructor(private listStyleService: ListStyleService,
              private listService: ListService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listStyleService.isGridList.subscribe((isGrid: boolean) => this.grid = isGrid);
    this.getVideosList();
  }

  getVideosList(): void {
    this.listService.videosList$.subscribe(videoList => this.videosList = videoList);
  }

  watchVideo(video): void {
    const dialogRef = this.matDialog.open(VideoEmbedComponent, {
      data: {
        id: video.videoID,
        name: video.type === 'youtube' ? video.snippet.title : video.name,
        type: video.type
      }
    });
  }

  likeVideo(video): void {
    const videosArray = Array.from(this.videosList);
    const id = videosArray.findIndex(el => el.videoID === video.videoID);

    if (video.favorite === false) {
      videosArray.map(el => {
        if (el.favorite === false) {
              videosArray[id] = {...videosArray[id], favorite: true};
              this.listService.updateList(videosArray);
            }
      });
    }

    if (video.favorite === true) {
      videosArray.map(el => {
        if (el.favorite === true) {
          videosArray[id] = {...videosArray[id], favorite: false};
          this.listService.updateList(videosArray);
        }
      });
    }
  }

  removeVideo(videoID: string): void {
    const removeIndex = this.videosList.map(video => video.videoID).indexOf(videoID);
    this.videosList.splice(removeIndex, 1);
    this.listService.updateList(this.videosList);
  }

  filterList(selectedFilter): void {
    const list = Array.from(this.videosList);

    if (selectedFilter.value === 'Ulubione') {
      const filteredByFavorites = list.filter(video => {
        return video.favorite;
      });
      this.listService.updateList(filteredByFavorites);
    }

    if (selectedFilter.value === 'Brak') {
      this.listService.updateList(this.videosList);
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
