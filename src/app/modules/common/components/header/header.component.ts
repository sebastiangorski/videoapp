import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  setListToList() {
    this.listService.setListDisplayStyle(false);
  }

  setListToGrid() {
    this.listService.setListDisplayStyle(true);
  }

}
