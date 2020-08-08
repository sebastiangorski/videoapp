import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../../common/services/list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  grid: boolean = true;
  filters = new FormControl();
  filtersList: string[] = ['Ulubione', 'YouTube', 'Vimeo'];

  sorting = new FormControl();
  sortingList: string[] = ['Ostatnio dodane', 'Najstarsze'];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.isGridList.subscribe((isGrid: boolean) => this.grid = isGrid);
  }

}
