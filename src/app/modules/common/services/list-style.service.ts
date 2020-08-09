import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListStyleService {
  public isGridList = new Subject();

  constructor() { }

  setListDisplayStyle(isGrid: boolean): void {
    this.isGridList.next(isGrid);
  }
}
