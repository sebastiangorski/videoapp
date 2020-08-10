import { Component, OnInit } from '@angular/core';
import { ListStyleService } from '../../services/list-style.service';
import { MatDialog } from '@angular/material/dialog';
import { WarningPopupComponent } from '../popups/warning-popup/warning-popup.component';
import { ListService } from '../../../videos/services/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private listStyleService: ListStyleService,
              private listService: ListService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  loadDemoList(): void {
    this.listService.loadDemoList();
  }


  openWarningPopup(): void {
    const dialogRef = this.matDialog.open(WarningPopupComponent);
    dialogRef.afterClosed().subscribe(remove => {
      if (remove === true) {
        this.listService.clearList();
      } else {
        return;
      }
    });
  }

  setListToList(): void {
    this.listStyleService.setListDisplayStyle(false);
  }

  setListToGrid(): void {
    this.listStyleService.setListDisplayStyle(true);
  }

}
