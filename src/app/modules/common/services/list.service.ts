import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public isGridList = new Subject();

  constructor() { }

  setListDisplayStyle(isGrid: boolean) {
    this.isGridList.next(isGrid);
  }
}
