import { Component, OnInit } from '@angular/core';
import { ListStyleService } from '../../../../common/services/list-style.service';
import { ListService } from '../../../services/list.service';
import { FormControl } from '@angular/forms';
import { YouTubeVideo } from '../../../../common/models/youtube.model';
import { VimeoVideo } from '../../../../common/models/vimeo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  grid: boolean = true;
  // filters = new FormControl();
  filtersList: string[] = ['Ulubione', 'YouTube', 'Vimeo'];

  // sorting = new FormControl();
  sortingList: string[] = ['Ostatnio dodane', 'Najstarsze'];

  demoList: (YouTubeVideo | VimeoVideo)[];

  constructor(private listStyleService: ListStyleService,
              private listService: ListService) {
  }

  ngOnInit(): void {
    this.listStyleService.isGridList.subscribe((isGrid: boolean) => this.grid = isGrid);
    this.getDemoList();
  }

  getDemoList(): void {
    this.demoList = this.listService.getDemoList();
  }

  likeVideo(): void {

  }

}
